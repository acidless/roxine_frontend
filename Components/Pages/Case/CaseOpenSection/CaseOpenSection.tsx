import DropCard from "../DropCard/DropCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAuthStatus } from "../../../../redux/reducers/Auth/AuthSelector";
import { CasesActions, OpenCase } from "../../../../redux/reducers/Cases/CasesReducer";
import { GetCurrentDrops } from "../../../../redux/reducers/Cases/CasesSelector";
import ICase from "../../../../types-interfaces/Content/Cases/ICase";
import { GetCurrentUser } from "../../../../redux/reducers/Users/CurrentUserReducer/UsersSelector";
import { UsersActions } from "../../../../redux/reducers/Users/CurrentUserReducer/UsersReducer";
import { CreateMessage } from "../../../../redux/reducers/App/AppReducer";
import CaseNotOpened from "./CaseStates/CaseNotOpened/CaseNotOpened";
import CaseOpened from "./CaseStates/CaseOpened/CaseOpened";
import CaseOpening from "./CaseStates/CaseOpening/CaseOpening";

/*====================*/

type PropsType = {
  currentCase: ICase | null;
};

export type CaseStates = "not-opened" | "opening" | "opened";

/*====================*/

const CaseOpenSection: React.FC<PropsType> = function ({ currentCase }) {
  const [caseState, setCaseState] = useState<CaseStates>("not-opened");
  const [currentOpenMode, setCurrentOpenMode] = useState(1);
  const [selectedCards, selectCard] = useState([]);

  /*====================*/

  const isAuth = useSelector(GetAuthStatus);
  const currentDrop = useSelector(GetCurrentDrops);
  const currentUser = useSelector(GetCurrentUser);

  /*====================*/

  const dropValue = currentDrop.reduce((sum, drop) => (drop.selected ? drop.value + sum : sum), 0);
  const dispatch = useDispatch();

  /*====================*/

  useEffect(() => {
    dispatch(
      CasesActions.setCurrentDrops(new Array(currentOpenMode * 2).fill({ value: 0, rarity: 0, selected: false }))
    );
  }, [currentDrop.length, currentOpenMode]);

  useEffect(() => {
    if (selectedCards.length === currentOpenMode) {
      OpenCase(currentCase.id, selectedCards, currentOpenMode, dispatch).then(() => {
        setCaseState("opened");
        selectCard([]);
      });
    }
  }, [selectedCards.length]);

  /*====================*/

  function openCase(cardId: number) {
    selectCard([cardId, ...selectedCards]);
  }

  function goNext() {
    dispatch(UsersActions.setBalanceDifference(null));
    setCaseState("not-opened");
  }

  /*====================*/

  function StartOpenCaseHandle() {
    const canUserOpenCase = currentUser && currentUser.balance >= currentCase.price * currentOpenMode;

    if (canUserOpenCase) {
      setCaseState("opening");
    } else {
      dispatch(CreateMessage("Недостаточно денег на балансе."));
    }
  }

  /*====================*/

  return (
    <section className={`${!isAuth ? "not-aviable " : caseState} case-wrapper__open-section`}>
      <div className="case-wrapper__open-cards flex-container content-center wrap">
        {caseState === "not-opened" ? (
          <img className="case-wrapper__image" src={`/imgs/cases/${currentCase.image}.webp`} alt="" />
        ) : (
          currentDrop.map((drop, index) => {
            return <DropCard key={index} id={index} drop={drop} caseState={caseState} openCase={openCase} />;
          })
        )}
      </div>
      <div className="flex-container content-center column">
        {isAuth ? (
          caseState === "opening" ? (
            <CaseOpening currentOpenMode={currentOpenMode} />
          ) : caseState === "opened" ? (
            <CaseOpened goNext={goNext} dropValue={dropValue} />
          ) : (
            <CaseNotOpened
              StartOpenCaseHandle={StartOpenCaseHandle}
              currentOpenMode={currentOpenMode}
              setCurrentOpenMode={setCurrentOpenMode}
              currentCase={currentCase}
            />
          )
        ) : (
          <p className="gradient-text">Авторизуйтесь для открытия кейса.</p>
        )}
      </div>
    </section>
  );
};

/*====================*/

export default CaseOpenSection;

import MessageWindow, { IMessageWindow } from "../MessageWindow/MessageWindow";

/*====================*/

type PropsType = IMessageWindow & {
  title: string;
  text: string;
  onAccept: (event: React.MouseEvent) => any;
};

/*====================*/

const CorrectionWindow: React.FC<PropsType> = function ({ title, text, isOpened, toggleOpen, onAccept }) {
  return (
    <MessageWindow isOpened={isOpened} toggleOpen={toggleOpen}>
      <div className="paddinged align-center small-container">
        <h2 className="gradient-text">{title}</h2>
        <p className="line">{text}</p>
        <div className="flex-container content-space-between">
          <button
            onClick={(e) => {
              onAccept(e);
              toggleOpen(false);
            }}
            className="button--red"
          >
            Да
          </button>
          <button
            onClick={() => {
              toggleOpen(false);
            }}
            className="button_dark"
          >
            <span className="text--bright">Нет</span>
          </button>
        </div>
      </div>
    </MessageWindow>
  );
};

/*====================*/

export default CorrectionWindow;

import { useEffect, useRef, useState } from "react";
import DroppingListHeading, { DroppingListHeadingPropsType } from "./DroppingListHeading/DroppingListHeading";
import DroppingListContent from "./DroppingListContent/DroppingListContent";

/*====================*/

const DroppingList: React.FC<DroppingListHeadingPropsType> = function ({ icon, children, name, href }) {
  const [listHeight, setListHeight] = useState(0);
  const [isActive, setActive] = useState(false);

  /*====================*/

  const listContent = useRef(null);

  /*====================*/

  useEffect(() => {
    if (listContent.current) {
      setListHeight(parseInt(getComputedStyle(listContent.current).height));
      listContent.current.style.height = 0;
    }
  }, []);

  /*====================*/

  function toggleDropLink() {
    if (listContent.current) {
      listContent.current.style.height = `${isActive ? 0 : listHeight}px`;
    }

    setActive(!isActive);
  }

  /*====================*/

  return (
    <div className="dropping-list">
      <DroppingListHeading icon={icon} name={name} href={href} toggleOpen={toggleDropLink} isOpened={isActive} />
      <DroppingListContent listContentRef={listContent}>{children}</DroppingListContent>
    </div>
  );
};

/*====================*/

export default DroppingList;

type PropsType = {
  listContentRef: React.Ref<any>;
};

/*====================*/

const DroppingListContent: React.FC<PropsType> = function ({ children, listContentRef }) {
  return (
    <div ref={listContentRef} className="dropping-list__content">
      {children}
    </div>
  );
};

/*====================*/

export default DroppingListContent;

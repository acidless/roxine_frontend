type PropsType = {
  currentPage: number;
  setPage: (page: number) => any;
  isLastPage?: boolean;
};

/*====================*/

const Pagingator: React.FC<PropsType> = function ({ isLastPage, currentPage, setPage }) {
  return (
    <div className="paginator flex-container content-center">
      <button
        disabled={currentPage === 0}
        className="button_dark flex-container"
        onClick={() => setPage(currentPage - 1)}
      >
        <span className="material-icons">navigate_before</span>
      </button>
      <button disabled={isLastPage} className="button_dark flex-container" onClick={() => setPage(currentPage + 1)}>
        <span className="material-icons">navigate_next</span>
      </button>
    </div>
  );
};

/*====================*/

export default Pagingator;

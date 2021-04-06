type PropsType = {
  onClick: (value: boolean) => void;
};

/*====================*/

const LoginButton: React.FC<PropsType> = function ({ onClick }) {
  return (
    <button
      onClick={() => {
        onClick(true);
      }}
      className="default-btn header__login flex-container"
    >
      <span className="material-icons text--bright">login</span>
      <p className="text--bright">Войти</p>
    </button>
  );
};

/*====================*/

export default LoginButton;

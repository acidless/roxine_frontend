import Gradient from "../../Gradient/Gradient";

/*====================*/

function Loader() {
  return (
    <div className="loader full-size-block flex-container">
      <svg>
        <Gradient />
        <circle stroke="url(#linear-gradient)" strokeWidth="6" fill="none" />
      </svg>
    </div>
  );
}

/*====================*/

export default Loader;

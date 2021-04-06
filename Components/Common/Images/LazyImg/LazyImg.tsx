import { useRef, useState } from "react";
import SmallLoader from "../../Loaders/SmallLoader/SmallLoader";

/*====================*/

type PropsType = {
  src: string;
  alt?: string;
  className?: string;
};

/*====================*/

const LazyImg: React.FC<PropsType> = function ({ className, alt, src }) {
  const [isLoaded, setLoaded] = useState(false);

  /*====================*/

  const image = useRef(null);

  /*====================*/

  function onLoad() {
    if (image.current) {
      setLoaded(true);
      image.current.style.height = "auto";
    }
  }

  /*====================*/

  return (
    <div className="flex-container align-items-center column">
      <img
        style={{ height: "0" }}
        className={className}
        onLoad={onLoad}
        ref={image}
        loading="lazy"
        src={src}
        alt={alt ? alt : ""}
      />
      <SmallLoader isActive={!isLoaded} />
    </div>
  );
};

/*====================*/

export default LazyImg;

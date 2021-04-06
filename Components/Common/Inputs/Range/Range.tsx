import FieldContainer from "../FieldContainer/FieldContainer";
import { useEffect, useRef } from "react";
import ExtendedMath from "../../../../utils/ExtendedMath";

/*====================*/

export type RangePropsType = {
  value?: any;
  name?: string;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: any) => any;
};

/*====================*/

const Range: React.FC<RangePropsType> = function ({ onChange, step = 1, min, max, name, value }) {
  const rangeProgress = useRef(null);

  /*====================*/

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }

    if (rangeProgress.current) {
      const isFireFoxBrowser = /firefox/.test(navigator.userAgent);

      if (isFireFoxBrowser) {
        rangeProgress.current.style.display = "none";
      } else {
        const width = Math.round(ExtendedMath.map(+value, +min, +max, 1, 100));
        rangeProgress.current.style.right = `calc(${100 - width}% + ${width / 15}em)`;
      }
    }
  }, [value]);

  /*====================*/

  return (
    <FieldContainer step={step} value={value} name={name} type="range" min={min} max={max}>
      <div ref={rangeProgress} className="input__progress" />
    </FieldContainer>
  );
};

/*====================*/

export default Range;

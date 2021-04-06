interface IGradient {
  reversed?: boolean;
}

/*====================*/

const Gradient: React.FC<IGradient> = function ({ reversed = false }) {
  let colors = ["#fccf31", "#f55555"];
  if (reversed) colors = colors.reverse();

  /*====================*/

  return (
    <linearGradient id="linear-gradient">
      {colors.map((color, i) => {
        return <stop key={i} offset={i} style={{ stopColor: color }} />;
      })}
    </linearGradient>
  );
};

/*====================*/

export default Gradient;

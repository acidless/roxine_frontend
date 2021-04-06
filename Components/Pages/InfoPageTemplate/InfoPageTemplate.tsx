type PropsType = {
  title: string;
  text: string;
};

/*====================*/

const InfoPageTemplate: React.FC<PropsType> = function ({
  children,
  title,
  text,
}) {
  return (
    <section className="not-found relative align-center">
      <span className="material-icons not-found__icon">settings</span>
      <div className="not-found__content relative">
        <h2 className="volumetric-text">{title}</h2>
        <p>{text}</p>
        {children}
      </div>
    </section>
  );
};

/*====================*/

export default InfoPageTemplate;

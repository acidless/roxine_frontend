function SmallLoader({ isActive }: { isActive: boolean }) {
  return (
    <div className={`${isActive ? "active " : ""}small-loader content-center flex-container`}>
      <div className="lds-ellipsis relative">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

/*====================*/

export default SmallLoader;

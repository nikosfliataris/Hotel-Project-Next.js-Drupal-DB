import React from "react";
import style from "./Loader.module.scss";
function Loader() {
  return (
    <section className={style.loader}>
      <div className={style.wrapper}>
        <div className={style.loader}>
          <div className={style.face}>
            <div className={style.circle}></div>
          </div>
          <div className={style.face}>
            <div className={style.circle}></div>
          </div>
        </div>
        {/* <div className="children">{children}</div> */}
      </div>
    </section>
  );
}

export default Loader;

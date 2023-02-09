import style from "./Directory.module.scss";
import Search from "../Search/Search";

function Directory() {
  return (
    <div className={style.Directory}>
      <div className={style.directory}>
        <Search />
      </div>
    </div>
  );
}

export default Directory;

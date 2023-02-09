import style from "./Spinner.module.scss";
function Spinner() {
  return (
    <div className={style.spinnerOverlay}>
      <div className={style.spinnerContainer} />
    </div>
  );
}

export default Spinner;

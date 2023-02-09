import style from "./Button.module.scss";
function Button({ children, inverted, ...otherprops }) {
  return (
    <button
      className={`${inverted ? style.invert : ""} ${style.custombotton}`}
      {...otherprops}
    >
      {children}
    </button>
  );
}

export default Button;

import style from "./Select.module.scss";
function Select({ handleSelect, ...otherprops }) {
  return (
    <div className={style.select_form}>
      <span>{otherprops.label}</span>
      <select onChange={handleSelect} className={style.select}>
        {otherprops.values?.map((info, i) => (
          <option
            key={i}
            value={
              otherprops.label === "Accommodations"
                ? info.attributes.field_code
                : otherprops.label === "Boards"
                ? info.attributes.field_code
                : otherprops.label === "Room Type"
                ? info.type
                : info
            }
          >
            {otherprops.label === "Accommodations"
              ? info.attributes.field_type_description
              : otherprops.label === "Boards"
              ? info.attributes.title
              : otherprops.label === "Room Type"
              ? info.value
              : info
              ? otherprops.label === "Payment Type"
                ? info.split("_").join(" ")
                : info
              : null}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;

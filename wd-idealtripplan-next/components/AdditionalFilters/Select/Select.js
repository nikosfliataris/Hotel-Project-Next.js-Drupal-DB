import style from "./Select.module.scss";
function Select({ handleSelect, ...otherprops }) {
  return (
    <>
      {otherprops.label}
      <select onChange={handleSelect}>
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
    </>
  );
}

export default Select;

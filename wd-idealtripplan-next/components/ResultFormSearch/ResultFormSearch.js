import React, { useState } from "react";
import style from "./ResultFormSearch.module.scss";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
function ResultFormSearch({
  filter_Header,
  stateTypes,
  Filter,
  setStateTypes,
  SelectedType,
  setSelectedType,
}) {
  const [reduce, setReduce] = useState(true);
  return (
    <div className={style.tour_search_type} key={stateTypes[0].id}>
      <p className={style.filter_header}>
        {filter_Header}{" "}
        {reduce ? (
          <BsArrowDown onClick={() => setReduce(false)} />
        ) : (
          <BsArrowUp onClick={() => setReduce(true)} />
        )}
      </p>

      <div className={style.choises}>
        {stateTypes
          ?.filter((index, i) => {
            if (reduce) {
              return i < 6;
            } else {
              return i;
            }
          })
          .map((index, i) => (
            <div className={style.form_check} key={i}>
              <input
                className={style.form_check_input}
                type="checkbox"
                checked={Filter[i] ? true : false}
                onChange={(e) => {
                  let filterCheck = stateTypes?.map((int) => {
                    let tempAttributes = int.attributes;
                    if (int.id === index.id) {
                      tempAttributes.status = !int.attributes.status;
                      return {
                        ...int,
                        attributes: tempAttributes,
                      };
                    }
                    return int;
                  });
                  setStateTypes((prev) => {
                    prev, filterCheck;
                  });
                }}
                onClick={(e) => {
                  let filters = SelectedType.filter(
                    (int) => int === index.attributes.field_code
                  );
                  if (filters.length === 0) {
                    setSelectedType((old) => [
                      ...old,
                      index.attributes.field_code,
                    ]);
                  } else {
                    let indexFilter = SelectedType.filter(
                      (i) => i != index.attributes.field_code
                    );
                    setSelectedType(indexFilter);
                  }
                }}
                key={i}
              />
              <label className={style.form_check_label}>
                <span className={style.area_flex_one}>
                  <span>
                    {`${
                      index.attributes.field_description
                        .charAt(0)
                        .toUpperCase() +
                      index.attributes.field_description.slice(1).toLowerCase()
                    }`}
                  </span>
                </span>
              </label>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ResultFormSearch;

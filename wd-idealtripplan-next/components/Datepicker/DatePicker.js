import style from "./DatePicker.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
function Datepicker() {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  console.log(checkOut);
  return (
    <div className={style.datepicker}>
      <DatePicker selected={checkIn} onChange={(date) => setCheckIn(date)} />
      <DatePicker selected={checkOut} onChange={(date) => setCheckOut(date)} />
    </div>
  );
}

export default Datepicker;

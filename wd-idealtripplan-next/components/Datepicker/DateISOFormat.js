function DateISOFormat(date) {
  const year = date.getFullYear();
  const month = `${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }`;
  const day = `${
    date.getDate() + 1 < 10 ? `0${date.getDate()}` : date.getDate()
  }`;
  let resp = `${year}-${month}-${day}`;

  return resp;
}
export default DateISOFormat;

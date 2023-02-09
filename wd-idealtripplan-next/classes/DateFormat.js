export default function Dateformat(time) {
  let Year = time?.getFullYear();
  let Month = time?.getMonth() + 1;
  let Day = time?.getDate();
  return `${Year}-${Month}-${Day}`;
}

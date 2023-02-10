import style from "./RateComponent.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
const url = require("url");
function RateComponent({
  adults,
  allotment,
  boardCode,
  boardName,
  cancellationPolicies,
  children,
  net,
  packaging,
  paymentType,
  rateClass,
  rateCommentsId,
  rateKey,
  rateType,
  rooms,
  roomId,
}) {
  const router = useRouter();
  const url_parts = url.parse(router.asPath, true);
  const { query, pathname } = url_parts;
  const [NumberOfRooms, setNumberOfRooms] = useState(0);
  console.log(NumberOfRooms);
  const handleBooking = (e) => {
    e.preventDefault();
    router.push({
      pathname: `/booking`,
      query: {
        adults: adults,
        children: children,
        rooms: NumberOfRooms,
        RoomId: roomId,
        ratekey: rateKey,
        payment: paymentType,
      },
    });
  };
  return (
    <>
      <table className={style.tablebody}>
        <tr>
          <th>Adults</th>
          <th>Children</th>
          <th>Payment</th>
          <th>Price</th>
          <th>cancellation</th>
        </tr>
        <tr>
          <td>
            <span>{adults}</span>
          </td>
          <td>{children}</td>
          <td>{paymentType}</td>
          <td>{net}</td>
          {cancellationPolicies.map((index) => (
            <div>
              From:<td> {index.from.slice(0, 10)}</td>
            </div>
          ))}
        </tr>
        <div className={style.select_options}>
          Number of Rooms:
          <select onChange={(e) => setNumberOfRooms(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button
            type="button"
            onClick={handleBooking}
            className="btn btn-success"
          >
            Book Now
          </button>
        </div>
      </table>
    </>
  );
}

export default RateComponent;

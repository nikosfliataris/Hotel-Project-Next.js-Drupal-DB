import style from "./RateComponent.module.scss";
import { useRouter } from "next/router";
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
  const handleBooking = (e) => {
    e.preventDefault();
    router.push({
      pathname: `/booking`,
      query: {
        adults: adults,
        children: query.children,
        rooms: query.rooms,
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
          <th>cancellation</th>
        </tr>
        <tr>
          <td>
            <span>{adults}</span>
          </td>
          <td>{children}</td>
          <td>{paymentType}</td>
          {cancellationPolicies.map((index) => (
            <div>
              From:<td> {index.from.slice(0, 10)}</td>
            </div>
          ))}
        </tr>

        <button
          type="button"
          onClick={handleBooking}
          className="btn btn-success"
        >
          Book Now
        </button>
      </table>
    </>
  );
}

export default RateComponent;

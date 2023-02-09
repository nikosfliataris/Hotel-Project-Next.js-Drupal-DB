import { Card } from "react-bootstrap";
import style from "./RateComponentSmall.module.scss";
import { useRouter } from "next/router";
const url = require("url");
function RateComponentSmall({ index, RoomId }) {
  const router = useRouter();
  const url_parts = url.parse(router.asPath, true);
  const { query, pathname } = url_parts;
  const handleBooking = (e) => {
    e.preventDefault();
    router.push({
      pathname: `/booking`,
      query: {
        adults: query.adults,
        checkIn: query.checkIn,
        checkOut: query.checkOut,
        children: query.children,
        destination: query.destination,
        rooms: query.rooms,
        RoomId: RoomId,
        ratekey: index.rateKey,
        payment: index.paymentType,
      },
    });
  };
  return (
    <>
      <div className={style.cardComponent}>
        <Card>
          <Card.Body>
            <Card.Title>
              <span>Type: {index.boardName}</span>
            </Card.Title>
            <Card.Text>
              <div className={style.type}>
                <Card.Subtitle className="mb-2 text-muted">
                  {" "}
                  Rooms: {index.rooms}
                  {index.rooms > 1 ? " Beds" : " Bed"}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Adults: {index.adults}
                </Card.Subtitle>
                <Card.Subtitle>Children: {index.children}</Card.Subtitle>
              </div>
            </Card.Text>
            <Card.Text>
              <div className={style.state}>
                <span>State: {index.rateType}</span>
              </div>
            </Card.Text>
            <Card.Text>
              <div className={style.price}>
                <Card.Subtitle className="mb-2 text-muted">
                  <strong>Price:</strong> {index.net}{" "}
                  {index.taxes.taxes[0].currency} +{" "}
                  {index.taxes.taxes[0].amount} {index.taxes.taxes[0].currency}{" "}
                  VAT
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  <strong>Payment:</strong>
                  {index.paymentType}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  <strong>Cancel:</strong>
                  {index.cancellationPolicies.map((index) => (
                    <div>
                      <p>Amount: {index.amount}</p>
                      <p>From: {index.from}</p>
                    </div>
                  ))}
                </Card.Subtitle>
              </div>
            </Card.Text>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleBooking}
            >
              Book Now
            </button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default RateComponentSmall;

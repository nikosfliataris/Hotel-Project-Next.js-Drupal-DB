import style from "./BookingDirectory.module.scss";
import Form from "react-bootstrap/Form";
function BookingDirectory({ HotelData, BookingConfirm, Key }) {
  return (
    <>
      <div className={`${style.bookingConfirm} container`} key={Key}>
        <h4 className={style.bookingConfirmTitle}>Booking Confirmed</h4>
        <div className={`${style.bookingConfirmForm} container`}>
          <div className={style.bookinghotelInfo}>
            <h4>Hotel Info</h4>
            <div className={style.hotelInfo}>
              <Form.Group className="mb-3">
                <Form.Label>Hotel Name</Form.Label>
                <Form.Control value={BookingConfirm?.hotel.name} disabled />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  value={BookingConfirm?.hotel.categoryName}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  value={BookingConfirm?.hotel.destinationName}
                  disabled
                />
              </Form.Group>
              {HotelData?.included
                ?.filter((index) => index.type === "node--address")
                .map((int) => (
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      value={int.attributes.field_content[0]}
                      disabled
                    />
                  </Form.Group>
                ))}

              {HotelData?.included
                ?.filter((index) => index.type === "node--phones_number")
                .map((int) => (
                  <Form.Group className="mb-3">
                    <Form.Label>{int.attributes.field_phonetype}</Form.Label>
                    <Form.Control
                      value={int.attributes.field_phonenumber}
                      disabled
                    />
                  </Form.Group>
                ))}
            </div>
          </div>
          <div className={style.bookingCustomerInfo}>
            <h4>Customer Info</h4>
            <div className={style.customerInfo}>
              <Form.Group className="mb-3">
                <Form.Label>Customer Info</Form.Label>
                <Form.Control
                  value={`${BookingConfirm?.holder.surname} ${BookingConfirm?.holder.name}`}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Rooms</Form.Label>
                {BookingConfirm?.hotel.rooms.map((index) => (
                  <Form.Control value={index.name} disabled />
                ))}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CheckIn Date</Form.Label>
                <Form.Control value={BookingConfirm?.hotel.checkIn} disabled />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CheckOut Date</Form.Label>
                <Form.Control value={BookingConfirm?.hotel.checkOut} disabled />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Booking Confirmation Date</Form.Label>
                <Form.Control
                  value={`Created Date: ${BookingConfirm?.creationDate}`}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  value={`${BookingConfirm?.totalNet}/${BookingConfirm?.currency}`}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Booking Confirmation</Form.Label>
                <Form.Control
                  value={`Reference Code: ${BookingConfirm?.reference} Status: ${BookingConfirm?.status}`}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Booking Cancellation/Modification</Form.Label>
                <Form.Control
                  value={`Cancellation: ${BookingConfirm?.modificationPolicies.cancellation} / Modification: ${BookingConfirm?.modificationPolicies.modification}`}
                  disabled
                />
              </Form.Group>
            </div>
          </div>
        </div>
        <p>
          Use The Booking Confirmation Code(Reference Code) from Customer Info,
          to retrieve the booking confirmation details in the future
        </p>
      </div>
    </>
  );
}

export default BookingDirectory;

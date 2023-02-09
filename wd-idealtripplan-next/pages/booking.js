import { useEffect, useState } from "react";
import style from "./../PagesStyle/booking/booking.module.scss";
import fetcher from "../functions/fetcher";
import SearchInput from "../components/SearchInput/SearchInput";
import Select from "./../components/AdditionalFilters/Select/Select";
import Spinner from "../components/Spinner/Spinner";
import BookingDirectory from "../components/BookingDirectory/BookingDirectory";
import { useRouter } from "next/router";
const url = require("url");
function booking() {
  const router = useRouter();
  const url_parts = url.parse(router.asPath, true);
  const { query, pathname } = url_parts;
  const [adultname, setAdultsName] = useState([]);
  const [message, setMessage] = useState("");
  const [BookingConfirm, setBookingConfirm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [HotelData, setHotelData] = useState([]);
  const [LoadingHotelData, setLoadingHotelData] = useState(true);
  const [cardType, setCardType] = useState([
    "AMEX",
    "EURO6000",
    "JCB",
    "DINERS",
    "MASTERCARD",
    "VISA",
    "MAESTRO",
    "SWITCH",
    "SOLO_GB",
    "AIRPLUS",
    "EURO6000",
    "CHINAUNIONPAY",
    "DISCOVER",
  ]);
  const [selectedCardType, setselectedCardType] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(false);
    const ResBooking = await fetcher(
      `${process.env.NEXT_PUBLIC_LOCALHOST}/api/booking`,
      {
        method: "POST",
        headers: "",
        body:
          query.payment === "AT_HOTEL"
            ? {
                holder: {
                  name: adultname.Name,
                  surname: adultname.SurName,
                },
                rooms: [
                  {
                    rateKey: query.ratekey,
                  },
                ],
                clientReference: "IntegrationAgency",
                remark: message,
                paymentData: {
                  paymentCard: {
                    cardHolderName: adultname.CardHolderName,
                    cardType: selectedCardType,
                    cardNumber: adultname.cardNumber,
                    expiryDate: adultname.expiryDate,
                    cardCVC: adultname.cardCVC,
                  },
                  contactData: {
                    email: adultname.email,
                    phoneNumber: adultname.phoneNumber,
                  },
                },
              }
            : {
                holder: {
                  name: adultname.Name,
                  surname: adultname.SurName,
                },
                rooms: [
                  {
                    rateKey: query.ratekey,
                  },
                ],
                clientReference: "IntegrationAgency",
                remark: message,
              },
      }
    );
    setBookingConfirm(ResBooking.booking);
    GetHotelDetialsFromDrupalWithHotelId(ResBooking.booking);
    setLoading(true);
  };

  const GetHotelDetialsFromDrupalWithHotelId = async (data) => {
    setLoadingHotelData(true);
    const Res = await fetcher(
      `${process.env.NEXT_PUBLIC_LOCALHOST}/api/DrupalForHotels/requestToDrupalForHotels`,
      {
        method: "GET",
        headers: {
          url: `https://trip.webdimension.gr/jsonapi/node/hotel?include=field_address,field_phones&filter[field_simple_code]=${data["hotel"].code}`,
        },
      }
    );
    setHotelData(Res);
    setLoadingHotelData(false);
  };

  if (loading === false) {
    return (
      <>
        {query.payment === "AT_HOTEL" ? (
          <form
            onSubmit={handleSubmit}
            className={`${style.bookingform} container`}
          >
            <h4>Booking Info</h4>
            <div className={style.bookingformComponents}>
              <SearchInput
                style={{ width: "100%" }}
                label="Name"
                type="text"
                value={adultname.Name}
                name="Name"
                handleChange={(e) => {
                  setAdultsName((old) => ({
                    ...old,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <SearchInput
                style={{ width: "100%" }}
                label="Sur Name"
                type="text"
                value={adultname.SurName}
                name="SurName"
                handleChange={(e) => {
                  setAdultsName((old) => ({
                    ...old,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />

              <h4
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  margin: "0px auto",
                }}
              >
                Card Info
              </h4>
              <SearchInput
                style={{ width: "100%" }}
                label="Card Holder Name"
                type="text"
                value={adultname.CardHolderName}
                name="cardHolderName"
                handleChange={(e) => {
                  setAdultsName((old) => ({
                    ...old,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <Select
                style={{ width: "100%" }}
                label="Card Type"
                values={cardType}
                name="cardType"
                handleSelect={(e) => {
                  setselectedCardType(e.target.value);
                }}
              />
              <SearchInput
                style={{ width: "100%" }}
                label="Card Number"
                type="text"
                value={adultname.CardNumber}
                name="cardNumber"
                handleChange={(e) => {
                  setAdultsName((old) => ({
                    ...old,
                    cardNumber: e.target.value,
                  }));
                }}
              />
              <SearchInput
                style={{ width: "100%" }}
                type="date"
                value={adultname.expireDate}
                name="expiryDate"
                handleChange={(e) => {
                  let date = {
                    [e.target.name]: e.target.value
                      .slice(2, 7)
                      .split("-")
                      .reverse(),
                  };
                  if (date.expiryDate) {
                    const year = date?.expiryDate[1];
                    const month = date?.expiryDate[0];
                    const Date = month.concat(year);
                    setAdultsName((old) => ({
                      ...old,
                      [e.target.name]: Date,
                    }));
                  }
                }}
              />
              <SearchInput
                style={{ width: "100%" }}
                label="Card CVC"
                type="number"
                value={adultname.CArdCVC}
                name="cardCVC"
                handleChange={(e) => {
                  setAdultsName((old) => ({
                    ...old,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <SearchInput
                style={{ width: "100%" }}
                label="Email"
                type="email"
                value={adultname.Email}
                name="email"
                handleChange={(e) => {
                  setAdultsName((old) => ({
                    ...old,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <SearchInput
                style={{ width: "100%" }}
                label="Phone Number"
                type="number"
                value={adultname.PhoneNUmber}
                name="phoneNumber"
                handleChange={(e) => {
                  setAdultsName((old) => ({
                    ...old,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <textarea
                className={style.formtext}
                placeholder="Booking remarks are to be written here."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-info">
              Submit
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`${style.bookingform} container`}
          >
            <h4>Booking Info</h4>
            <div className={style.bookingformComponents}>
              <SearchInput
                style={{ width: "100%" }}
                label="Name"
                type="text"
                value={adultname.Name}
                name="Name"
                handleChange={(e) => {
                  setAdultsName((old) => ({
                    ...old,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <SearchInput
                style={{ width: "100%" }}
                label="SurName"
                type="text"
                value={adultname.SurName}
                name="SurName"
                handleChange={(e) => {
                  setAdultsName((old) => ({
                    ...old,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
            </div>
            <div className={`${style.formtext} container`}>
              {" "}
              <textarea
                placeholder="Booking remarks are to be written here."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </form>
        )}
      </>
    );
  } else {
    if (LoadingHotelData === false) return <Spinner />;
    else {
      return (
        <>
          <BookingDirectory
            HotelData={HotelData}
            BookingConfirm={BookingConfirm}
            // Key={HotelData.data[0].id}
          />
        </>
      );
    }
  }
}

export default booking;
export const getServerSideProps = async (ctx) => {
  return {
    props: { data: ctx.query },
  };
};

import fetcher from "../../../functions/fetcher";
import style from "./rateKey.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Spinner from "../../../components/Spinner/Spinner";

const url = require("url");
function rateKey({ data }) {
  const [loadingComments, setLoadingComments] = useState(false);
  const [RateComments, setRateComments] = useState("");
  const [loadingRoomDetails, setLoadingRoomDetails] = useState(false);
  const [RoomData, setRoomData] = useState([]);
  const router = useRouter();
  const url_parts = url.parse(router.asPath, true);
  const { query, pathname } = url_parts;

  const RoomCheckRate = async () => {
    setLoadingComments(false);
    const res = await fetcher(
      `${process.env.NEXT_PUBLIC_LOCALHOST}/api/checkrates`,
      {
        method: "POST",
        headers: "",
        body: {
          rooms: [
            {
              rateKey: data,
            },
          ],
        },
      }
    );
    setRateComments(res);
    setLoadingComments(true);
  };
  const DrupalRoomDetails = async () => {
    setLoadingRoomDetails(false);
    const Res = await fetcher(
      `${process.env.NEXT_PUBLIC_LOCALHOST}/api/DrupalForHotels/requestToDrupalForHotels`,
      {
        method: "GET",
        headers: {
          url: `https://trip.webdimension.gr/jsonapi/node/rooms/${query?.RoomId}?include=field_roomcode,field_roomfacilities,field_roomstays`,
        },
      }
    );
    setRoomData(Res);
    setLoadingRoomDetails(true);
  };
  const handleBooking = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/booking",
      query: {
        adults: query.adults,
        children: query.children,
        key: RateComments.hotel.rooms[0].rates[0].rateKey,
        payment: RateComments.hotel.rooms[0].rates[0].paymentType,
      },
    });
  };
  useEffect(() => {
    RoomCheckRate();
  }, []);
  useEffect(() => {
    DrupalRoomDetails();
  }, [loadingComments === true]);
  if (loadingComments === false || loadingRoomDetails === false)
    return <Spinner />;
  return (
    <div className={style.CheckRateroom}>
      <div className={style.wrap}>
        <div className={style.roomdetails}>
          <div className={style.type}>
            <span>Type: {RateComments.hotel.rooms[0].rates[0].boardName}</span>
            <span>
              Rooms: {RateComments.hotel.rooms[0].rates[0].rooms}
              {RateComments.hotel.rooms[0].rates[0].rooms > 1
                ? " Beds"
                : " Bed"}
            </span>
            <span>Adults: {RateComments.hotel.rooms[0].rates[0].adults} </span>
            <span>
              Children: {RateComments.hotel.rooms[0].rates[0].children}
            </span>
          </div>
          <div className={style.state}>
            <span>State: {RateComments.hotel.rooms[0].rates[0].rateType}</span>
            <button onClick={handleBooking}>Book Now</button>
          </div>
          <div className={style.price}>
            <span>
              <strong>Price:</strong> {RateComments.hotel.rooms[0].rates[0].net}{" "}
              {RateComments.hotel.rooms[0].rates[0].taxes.taxes[0].currency} +{" "}
              {RateComments.hotel.rooms[0].rates[0].taxes.taxes[0].amount}{" "}
              {RateComments.hotel.rooms[0].rates[0].taxes.taxes[0].currency} VAT
            </span>
            <span>
              <strong>Payment:</strong>
              {RateComments.hotel.rooms[0].rates[0].paymentType}
            </span>
            <span>
              <strong>Cancel:</strong>
              {RateComments.hotel.rooms[0].rates[0].cancellationPolicies.map(
                (index) => (
                  <div>
                    <p>Full Amount: {index.amount}</p>
                    <p>From: {index.from}</p>
                  </div>
                )
              )}
            </span>
          </div>
          <div className={style.comment}>
            {RateComments.hotel.rooms[0].rates[0].rateComments}
          </div>
        </div>
      </div>
    </div>
  );
}

export default rateKey;
export const getServerSideProps = async (ctx) => {
  return {
    props: { data: ctx.query.rateKey },
  };
};

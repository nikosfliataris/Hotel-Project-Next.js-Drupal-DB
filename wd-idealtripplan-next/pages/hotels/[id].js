import style from "./../../PagesStyle/Hotelid/hotelID.module.scss";
import HotelDetails from "../../components/HotelDetails/HotelDetails";
import fetcher from "../../functions/fetcher";
import Loader from "../../components/Loader/Loader";
import HomeLayOut from "../../LayOut/HomeLayOut/HomeLayOut";
import { useEffect, useState } from "react";
const url = require("url");
function Id({ id, Hotel }) {
  const [ResponseHotel, setResponseHotel] = useState([]);
  if (!Hotel)
    return (
      <main>
        <Loader />
      </main>
    );
  useEffect(() => {
    if (typeof window !== "undefined") {
      let Hotel = JSON.parse(window.localStorage.getItem("HotelsArray"));
      setResponseHotel(Hotel.hotels.filter((hotel) => hotel.code == id));
    }
  }, []);
  return (
    <main className={style.HotelComponent}>
      <HomeLayOut>
        <HotelDetails details={Hotel} key={id} ResponseHotel={ResponseHotel} />
      </HomeLayOut>
    </main>
  );
}

export default Id;
export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  console.log(id);
  const Reshotel = await fetch(
    `https://dev-fliataris-app.pantheonsite.io/jsonapi/node/hotel/?filter[field_code]=${id}&include=field_accommodationtypecode,field_address,field_boardcodes,field_categorycode,field_categorygroupcode,field_chaincode,field_coordinates,field_countrycode,field_destinationcode,field_facilities,field_images,field_issues,field_phones,field_piontsofinterest,field_rooms,field_segmentcodes,field_statecode,field_terminals,field_wildcards,field_zones`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",
      },
    }
  );
  console.log(Reshotel);
  const Hotel = await Reshotel.json();
  return {
    props: { id, Hotel },
  };
};

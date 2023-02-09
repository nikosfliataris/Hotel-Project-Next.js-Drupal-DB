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

  const Reshotel = await fetch(
    `https://dev-fliataris-app.pantheonsite.io/jsonapi/node/hotel/?filter[field_code]=${id}&include=field_accommodationtypecode,field_address,field_boardcodes,field_categorycode,field_categorygroupcode,field_chaincode,field_coordinates,field_countrycode,field_destinationcode,field_facilities,field_images,field_issues,field_phones,field_piontsofinterest,field_rooms,field_segmentcodes,field_statecode,field_terminals,field_wildcards,field_zones`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU2NmNjODZkNTY3NzAzM2FmYWFlZjRlODU4OGE3ZGY4MWI1YjM0YjkyODZlMDNkMDM0ZWYwNWZhZTkxNjNkZjMzNjhlMTg3OWE0ZmUyMzE2In0.eyJhdWQiOiJVcHBlclVzZXIiLCJqdGkiOiJlNjZjYzg2ZDU2NzcwMzNhZmFhZWY0ZTg1ODhhN2RmODFiNWIzNGI5Mjg2ZTAzZDAzNGVmMDVmYWU5MTYzZGYzMzY4ZTE4NzlhNGZlMjMxNiIsImlhdCI6MTY3NTg2OTQ5OCwibmJmIjoxNjc1ODY5NDk4LCJleHAiOjE2Nzg0NjE0OTcuOTc5NDA2LCJzdWIiOiIxIiwic2NvcGUiOlsiYXV0aGVudGljYXRlZCJdfQ.OcIDOCem2Ti9Qzn0jeSeWTUnfp2cTDafbQXnmx2RXrtiRVDH5AtHz9k0vx9fEP8NAyGeRhEFuQo82N4wqXr7SnuyPwbM0PxrCw2RWUZMTgEKApSN0l2DY3w8FsFCG1Fk5vvWSPAlZAsb_zsUBqpXOqXyww3YLV98LZhWKigFMqvRbZ-AzhzcFx3FHlQdGr0aDDA1I--e1BdxDlAj2SRV35gQzpUKYz3sOGqRi5NXNvL8-TGK4KMmJOzgETO_VA1o02Tv9iUbJLfOgI5zWY1dzpJLuy4t0PiOAH99o7w1xyO7qUigXvUZQOE5VX23bf_ojyDQUVo1Ne7MKCB2r4z_93T6RmNr6XkSDugay3yPb3tXIwag653eQ08oFXC65HmfORO0ike3yFwOcsdsvwd3WT3wE4DlCihXw11y6g7_0GV1C6pgcq-K8HD7qUvXR_gu1VTJGUuIeHn8SZyXPVjM4fGCJyIjPiE6deyLCdoLF_eYuQoivpfsmr5eud3H9Dv9-pvPPvUvKXhrB9hogPMljCIi5-Yy1SBlcVmThHKNtpZ-AW66w7L9WGiNYs_29AoUu5pacRRGGJs-MPeJcpYdaBMG_j2O0CIeeSo7SeufnIIBEGKQxaxsvdP3dJYMLyhRPFrbgThpl5roPocWZTxycnVdoeKSW3rA4cTe2dWXryU`,
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",
      },
    }
  );
  const Hotel = await Reshotel.json();
  console.log(Reshotel);
  return {
    props: { id, Hotel },
  };
};

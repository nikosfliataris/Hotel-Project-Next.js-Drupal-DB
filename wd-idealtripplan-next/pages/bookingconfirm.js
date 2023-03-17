import fetcher from "../functions/fetcher";
import CryptoJS from "crypto-js";
import { useEffect, useState } from "react";
import BookingDirectory from "../components/BookingDirectory/BookingDirectory";
import Loader from "../components/Loader/Loader";
function bookingconfirm({ Res }) {
  const [Data, setData] = useState();
  console.log(Res, Data);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU2NmNjODZkNTY3NzAzM2FmYWFlZjRlODU4OGE3ZGY4MWI1YjM0YjkyODZlMDNkMDM0ZWYwNWZhZTkxNjNkZjMzNjhlMTg3OWE0ZmUyMzE2In0.eyJhdWQiOiJVcHBlclVzZXIiLCJqdGkiOiJlNjZjYzg2ZDU2NzcwMzNhZmFhZWY0ZTg1ODhhN2RmODFiNWIzNGI5Mjg2ZTAzZDAzNGVmMDVmYWU5MTYzZGYzMzY4ZTE4NzlhNGZlMjMxNiIsImlhdCI6MTY3NTg2OTQ5OCwibmJmIjoxNjc1ODY5NDk4LCJleHAiOjE2Nzg0NjE0OTcuOTc5NDA2LCJzdWIiOiIxIiwic2NvcGUiOlsiYXV0aGVudGljYXRlZCJdfQ.OcIDOCem2Ti9Qzn0jeSeWTUnfp2cTDafbQXnmx2RXrtiRVDH5AtHz9k0vx9fEP8NAyGeRhEFuQo82N4wqXr7SnuyPwbM0PxrCw2RWUZMTgEKApSN0l2DY3w8FsFCG1Fk5vvWSPAlZAsb_zsUBqpXOqXyww3YLV98LZhWKigFMqvRbZ-AzhzcFx3FHlQdGr0aDDA1I--e1BdxDlAj2SRV35gQzpUKYz3sOGqRi5NXNvL8-TGK4KMmJOzgETO_VA1o02Tv9iUbJLfOgI5zWY1dzpJLuy4t0PiOAH99o7w1xyO7qUigXvUZQOE5VX23bf_ojyDQUVo1Ne7MKCB2r4z_93T6RmNr6XkSDugay3yPb3tXIwag653eQ08oFXC65HmfORO0ike3yFwOcsdsvwd3WT3wE4DlCihXw11y6g7_0GV1C6pgcq-K8HD7qUvXR_gu1VTJGUuIeHn8SZyXPVjM4fGCJyIjPiE6deyLCdoLF_eYuQoivpfsmr5eud3H9Dv9-pvPPvUvKXhrB9hogPMljCIi5-Yy1SBlcVmThHKNtpZ-AW66w7L9WGiNYs_29AoUu5pacRRGGJs-MPeJcpYdaBMG_j2O0CIeeSo7SeufnIIBEGKQxaxsvdP3dJYMLyhRPFrbgThpl5roPocWZTxycnVdoeKSW3rA4cTe2dWXryU";
  useEffect(() => {
    async function HotelData() {
      const res = await fetcher(
        `${process.env.NEXT_PUBLIC_LOCALHOST}/api/DrupalRequestForHotelDetails`,
        {
          method: "GET",
          headers: {
            url: `https://dev-fliataris-app.pantheonsite.io/jsonapi/node/hotel?filter[field_code]=${Res?.booking.hotel.code}&include=field_address,field_phones`,
          },
        }
      );
      setData(res);
    }
    HotelData();
  }, [Res]);

  if (!Res && !Data)
    return (
      <main>
        <Loader />
      </main>
    );
  return (
    <div>
      <BookingDirectory HotelData={Data} BookingConfirm={Res.booking} />
    </div>
  );
}

export default bookingconfirm;
export const getServerSideProps = async (ctx) => {
  let utcDate = Math.floor(new Date().getTime() / 1000);
  let assemble =
    process.env.HoteBeds_PublicKey + process.env.HoteBeds_privateKey + utcDate;
  let hash = CryptoJS.SHA256(assemble).toString();
  let encryption = hash.toString(CryptoJS.enc.Hex);
  let HotelBedsHeader = {
    "Api-key": process.env.HoteBeds_PublicKey,
    "X-Signature": encryption,
    Accept: "application/json",
    "Accept-Encoding": "gzip",
    "Content-Type": "application/json",
  };

  const Res = await fetcher(
    `${process.env.NEXT_PUBLIC_HotelBeds}/bookings/${ctx.query.booking_confirm}`,
    {
      method: "GET",
      headers: HotelBedsHeader,
    }
  );

  return {
    props: { Res },
  };
};

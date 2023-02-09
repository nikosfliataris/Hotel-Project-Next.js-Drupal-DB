import fetcher from "../../functions/fetcher";
import CryptoJS from "crypto-js";
export default async function handler(req, res) {
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
  if (req.method === "POST") {
    const Res = await fetcher(
      `${process.env.NEXT_PUBLIC_HotelBeds}/checkrates`,
      {
        method: req.method,
        headers: HotelBedsHeader,
        body: req.body,
      }
    );
    res.status(200).send(Res);
  }
}

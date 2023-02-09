import fetcher from "../../../functions/fetcher";

export default async function handler(req, res) {
  try {
    const Res = await fetcher(req.headers.url, {
      method: "GET",
      headers: "",
    });
    res.status(200).send(Res);
  } catch (error) {
    console.log(error);
  }
}

import EntityRepository from "./../../functions/EntityRepository";
import fetcher from "../../functions/fetcher";
export default async function handler(req, res) {
  const ResData = await fetcher(req.headers.url, req.headers);
  res.status(200).send(ResData);
}

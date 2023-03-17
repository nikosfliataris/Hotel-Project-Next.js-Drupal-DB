import EntityRepository from "../../../functions/EntityRepository";
import fetcher from "../../../functions/fetcher";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const stateBody = JSON.parse(req.body);
    const nodeUrl = stateBody.data.type.split("node--");
    const url = `https://dev-fliataris-app.pantheonsite.io/jsonapi/node/${nodeUrl[1]}`;
    const stateRes = await fetcher(
      url,
      {
        method: req.method,
        body: stateBody,
        drupalType: true,
      },
      config
    );
    res.status(201).send(stateRes);
  }
}

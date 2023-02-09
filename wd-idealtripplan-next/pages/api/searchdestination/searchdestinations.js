export default async function handler(req, res) {
  if (req.method === "POST") {
    const Request_To_Drupal_for_Destination = await fetch(
      `https://dev-fliataris-app.pantheonsite.io/jsonapi/node/destinations?filter[destination][condition][path]=field_name&filter[destination][condition][operator]=STARTS_WITH&filter[destination][condition][value]=${req.body.input}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      }
    ).then((res) => res.json());
    const data = await Request_To_Drupal_for_Destination;
    res.status(200).json(data);
  }
}

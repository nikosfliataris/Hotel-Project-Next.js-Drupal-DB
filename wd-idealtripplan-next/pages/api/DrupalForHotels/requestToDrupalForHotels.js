import EntityRepository from "../../../functions/EntityRepository";
import fetcher from "../../../functions/fetcher";

export default async function handler(req, res) {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJmZTZiMWEwYzFlODcwMDMxNGNlYTU3MDAyZWM2ZjQzODgyMGI0MTg1YjM2NjYxN2I2OTYwMzg1ZmUyYzY5YWJhNmNiYmE2ZTM0MDg3ZDEzIn0.eyJhdWQiOiI5YjEwN2Q1YS02NDAzLTQ1ODktYmMyMy0yOWM5YjBkZGMxYWUiLCJqdGkiOiIyZmU2YjFhMGMxZTg3MDAzMTRjZWE1NzAwMmVjNmY0Mzg4MjBiNDE4NWIzNjY2MTdiNjk2MDM4NWZlMmM2OWFiYTZjYmJhNmUzNDA4N2QxMyIsImlhdCI6MTY2MTQzNDI0OCwibmJmIjoxNjYxNDM0MjQ4LCJleHAiOjE2NjI2NDM4NDgsInN1YiI6IjMiLCJzY29wZXMiOlsiYXV0aGVudGljYXRlZCIsIm5leHQiXX0.BXuPF4s30fgxorisju0ge7SFewHSb_emjS9hO--SbBBAeiKwmpES2vdI39Z1UGMIhJ9kkGyMG_IDOkSjE1l83rlJsU-pQGUiIpL9BKZnCyFQ-IoqUsIuEgPeaTbM-k5QII_YShyaEv8WdYJvKtH5tPFMsCsAbw-0a2eLEs7ltXfUMkLFAFpr4H0jrch1pPK83dXWXYF2IdQuN0VcXdSzY85ulMGLmNkTxdm3jI3CbT2AaGnOr9fAO8YeuqzHNy_PGNsO2b7iPpoyKQGUxhjk1UEfFeSH7x_6Vvcr664N1ffu0PYUl6kNuzyhbWZizZbjO3EGgiWo4fPtYCVGT0CsBlIKHphdL3cQF8VrICDzTWzMPIQ1xe6tbsuykqubdVNAxaaobABHzD5FKuZs-94ey8SNoIk1rOKwxkflngAp0Ake8eg0AL0f6ZGMX1Yu3YiG2XifM0xKYF8m7YlFHijaMpb5SbQttNyWO5M0bp15FGPfiFG4FFhXidJfI5iCuUUqCZQWg8Z_LUgUN5yGqLdMEJWVceYbgOLFxDIV-i6msN72dj9EDUZzTDdFoqbVA-GEoJtqaDh_4Q-eCRPjSqjawvo8-itp0TOP9nEh4ax8OFuK8R47a5p5v3NcWteiVGKw0ymr6fIhQ062CJmUSYcPoqXd45H-VcSOq5xC1m5BkOk";
  if (req.method === "POST") {
    const stateBody = JSON.parse(req.body);
    const nodeUrl = stateBody.data.type.split("node--");
    const url = `https://trip.webdimension.gr/jsonapi/node/${nodeUrl[1]}`;
    const stateRes = await fetcher(
      url,
      {
        method: req.method,
        body: stateBody,
        token,
        drupalType: true,
      },
      config
    );
    res.status(201).send(stateRes);
  }
}

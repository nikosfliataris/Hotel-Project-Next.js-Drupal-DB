import fetcher from "../../functions/fetcher";

export default async function handler(req, res) {
  const token =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQzNmZkYTc0OTczMzg2YTE2YmVkMWQ0M2FlZTk5YzgxYjI5YzUzNDMxZjhjMTMzNDE2N2VmOGFhZTMxZjQ1YzgzM2MxNzhkN2I4NGFjNTViIn0.eyJhdWQiOiI5YjEwN2Q1YS02NDAzLTQ1ODktYmMyMy0yOWM5YjBkZGMxYWUiLCJqdGkiOiI0MzZmZGE3NDk3MzM4NmExNmJlZDFkNDNhZWU5OWM4MWIyOWM1MzQzMWY4YzEzMzQxNjdlZjhhYWUzMWY0NWM4MzNjMTc4ZDdiODRhYzU1YiIsImlhdCI6MTY1ODkxMTE3NCwibmJmIjoxNjU4OTExMTc0LCJleHAiOjE2NjAxMjA3NzMsInN1YiI6IjMiLCJzY29wZXMiOlsiYXV0aGVudGljYXRlZCIsIm5leHQiXX0.syFcpXfqz4E2imN0XbUDyWxY4diTBhiCRAwocZnDt_EazR6xAlKiqfUyb3PJnmSmE8G3hcLbzdViU0GroTP3khyDifmL8x2Z29O8Hav5xKsSfR5245CAAwPQx6H85mZpWrVSMtW5UewTZ1HQANAGMPKex_lWFeSwK92Ct_7rZFoD38tUMnlMoQaIbCMgjSqngg_pXbjszcesCijBKsA6MYcJp8zTGOkqC__icHKdmswClh4sxoZSZsiAp0wuuK6_Fc-lCr_wP8J2GkudJvWA8nFf1_tse1yQBvJhHU8gHuYqWBo_rf7AIxlzmBj5o5oKJvOb0T4LBMRnbYMfoxJ6XLZuCghO8dBxW-98CCsUru-M1N19WwzYCDIKDmhushqlmTqf3hs-c5NKIn-bV1cOxHjMdl3eVJvYrwp8bAv0j7ZkJ-tHr_myzxqwofm7RMX7LQbCyklhBXtErykFzJKH5N9_a-vX_YWU1W73B-o9dzBTTdp8SzQOvExJOOw5y-VPXBnVLkEQTj_G-C0hINy3syPBbKQ8dsMExoEXtrGUDXMF3IxJoPeRFKV_F0XvaEhogweBHktJi17s1Dpb6mDpzuSR0RFvN_wTFc7ZjUiQWPAJJWyKazuK4JAnY6W9LXpnSVFxFMxeqEAdGHYDfaUh1WiyjO3GiKeV4XezWq2cK0A";
  if (req.method === "PATCH") {
    const stateBody = JSON.parse(req.body);
    const stateRes = await fetcher(req.headers.url, {
      method: req.method,
      headers: req.headers,
      body: stateBody,
    });
  } else {
    const stateRes = await fetch(req.headers.url, req.headers);
    const data = await stateRes.json();
    res.status(200).send(data);
  }
}

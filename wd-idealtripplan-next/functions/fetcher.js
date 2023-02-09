import CryptoJS from "crypto-js";

async function fetcher(url, options) {
  let commonHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip",
  };
  if (options?.drupalType) {
    commonHeaders["Content-Type"] = "application/vnd.api+json";
    commonHeaders["Accept"] = "application/vnd.api+json";
  }
  if (options?.token) {
    commonHeaders["Authorization"] = `Bearer ${options.token}`;
  }

  let hotelbedsHeaders = {};
  if (options?.hotelsKey && options?.hotelsSecret) {
    let utcDate = Math.floor(new Date().getTime() / 1000);
    let assemble = options?.hotelsKey + options?.hotelsSecret + utcDate;
    let hash = CryptoJS.SHA256(assemble).toString();
    let hotelsSignature = hash.toString(CryptoJS.enc.Hex);
    hotelbedsHeaders = {
      "Api-key": options?.hotelsKey,
      "X-Signature": hotelsSignature,
    };
  }

  let body = options?.formData
    ? options.formData
    : JSON.stringify(options?.body);
  let fetchOptions = {
    method: options?.method || "GET",
    body,
  };

  if (options?.headers != "fetch") {
    fetchOptions["headers"] = {
      ...commonHeaders,
      ...options?.headers,
      ...hotelbedsHeaders,
    };
  }

  try {
    let res = await fetch(url, fetchOptions);
    if (res.status == 204) {
      return true;
    }
    return res.ok
      ? res.json()
      : Promise.reject({
          status: res.status,
          message: res.statusText,
          url: res.url,
        });
  } catch (error) {
    return Promise.reject({
      message: error,
      url: url,
    });
  }
}

export default fetcher;

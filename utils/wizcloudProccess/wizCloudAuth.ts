import { config } from "dotenv";
let fetch = require("node-fetch");

config();

const wizKey = process.env.WIZ_KEY; // copied from apiPermits.html
const company = process.env.WIZ_COMPANY; // wizcloud server domain, defaults to wizcloud.co.il;

function wizCloudAuth() {
    const p = new Promise((resolve, reject) => {
      if (!wizKey) {
        reject({ reason: "Missing Hashavshevet ser key or company ID" });
        return;
      }
      const url = `https://lb1.wizcloud.co.il/createSession/${wizKey}/${company}`;
      fetch(url)
        .then((res) => res.text())
        .then(async (data) => resolve(await data));
      // TODO: add error handling, according to old code:
      // request(url, (error, response, body) => {
      //   if (error || response.statusCode !== 200) {
      //     console.log("error:", error); // Print the error if one occurred
      //     reject({ reason: "auth http fail", url, err: error });
      //     return;
      //   }
      //   console.log("wizAuthToken",response.statusCode,body)
      //   resolve(body);
      // });
    });
    return p;
  }

  export { wizCloudAuth };
import { wizCloudAuth } from "./wizCloudAuth";
const request = require("request");

function getHashavshevetFormData(data) {
  console.log("ping");

  const p = new Promise((resolve, reject) => {
    wizCloudAuth()
      .then(
        (token) => {
          const wizAuthToken = token;
          const url = `https://lb1.wizcloud.co.il/ExportDataApi/exportData`;

          const params = data;
          const options = {
            form: params,
            headers: {
              Authorization: `Bearer ${wizAuthToken}`,
            },
            method: "POST",
            url,
          };
          request.post(options, (error, response, body) => {
            if (error) {
              console.log(error);
              reject(error);
            } else {
              resolve(JSON.parse(response.body)["repdata"]);
            }
          });
        },
        (error) => {
          console.log("ERR12", error);
          throw new Error("auth error");
        }
      )
      .catch((e) => {
        console.log("ERR12", e);
        throw new Error("auth error");
      });
  });

  return p;
}

export { getHashavshevetFormData };

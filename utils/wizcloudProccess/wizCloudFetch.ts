import { wizCloudAuth } from "./wizCloudAuth";
const request = require("request");

function wizCloudFetch(path, data = {}) {
  console.log("ping");

  const p = new Promise((resolve, reject) => {
    wizCloudAuth()
      .then(
        (token) => {
          const wizAuthToken = token;
          const url = `https://lb1.wizcloud.co.il/${path}`;
          const options = {
            form: data,
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

export async function napi(data) {
	return wizCloudFetch("api/napi", data);
}
//jurnal
export async function tmpJurnalBatch(data){  
    return wizCloudFetch('jtransApi/tmpBatch',data)
 }
 export async function chkJurnalBatch(data){  
    return wizCloudFetch('jtransApi/chkBatch',data)
 }
 export async function newJurnalBatch(data){  
    return wizCloudFetch('jtransApi/newBatch',data)
 }
 export async function issueJurnalBatch(data){  
    return wizCloudFetch('jtransApi/issueBatch',data)
 }
 //index
 export async function importIndexRecords(data){ 
    return wizCloudFetch('IndexApi/importIndex',data)
 }
 export async function deleteIndexRecords(data){ 
    return wizCloudFetch('IndexApi/deleteIndex',data)
 }
 //bankpages
 export async function importBankPageRecords(data){ 
    return wizCloudFetch('BankPagesApi/importBankPage',data)
 }
 //data export
 export async function exportDataRecords(data){ 
    return wizCloudFetch('ExportDataApi/exportData',data)
 }
 //inv documents
export async function createDocument(data) {
	return wizCloudFetch("invApi/createDoc", data);
}
export async function showDocument(data) {
	return wizCloudFetch("invApi/getDoc", data);
}
export async function delDocument(data) {
	return wizCloudFetch("invApi/delDocument", data);
}
export async function issueDoc(data) {
	return wizCloudFetch("invApi/issueDocument", data);
}
//crm
export async function crmActivities(data) {
	return wizCloudFetch("crmActivitiesApi/createSchema", data);
}
export async function crmActivitiesTest(data) {
	return wizCloudFetch("crmActivitiesTest/createSchema", data);
}
 //companies list
export async function CompaniesForToken() {
	return wizCloudFetch("CompanyListToTokenApi/TokenCompanies");
}

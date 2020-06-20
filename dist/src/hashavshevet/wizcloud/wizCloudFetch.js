"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wizCloudAuth_1 = require("./wizCloudAuth");
const request_1 = __importDefault(require("request"));
function wizCloudFetch(path, data = {}) {
    console.log("ping");
    const p = new Promise((resolve, reject) => {
        wizCloudAuth_1.wizCloudAuth()
            .then((token) => {
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
            request_1.default.post(options, (error, response, body) => {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                else {
                    resolve(JSON.parse(response.body));
                }
            });
        }, (error) => {
            console.log("ERR12", error);
            throw new Error("auth error");
        })
            .catch((e) => {
            console.log("ERR12", e);
            throw new Error("auth error");
        });
    });
    return p;
}
function napi() {
    return wizCloudFetch("api/napi");
}
exports.napi = napi;
// jurnal
function addTransactionsToBatch(data) {
    return wizCloudFetch("jtransApi/tmpBatch", data);
}
exports.addTransactionsToBatch = addTransactionsToBatch;
function checkBatch(data) {
    return wizCloudFetch("jtransApi/chkBatch", data);
}
exports.checkBatch = checkBatch;
function newBatch() {
    return wizCloudFetch("jtransApi/newBatch");
}
exports.newBatch = newBatch;
function issueBatch(data) {
    return wizCloudFetch("jtransApi/issueBatch", data);
}
exports.issueBatch = issueBatch;
// index
function importIndexRecords(data) {
    return wizCloudFetch("IndexApi/importIndex", data);
}
exports.importIndexRecords = importIndexRecords;
function deleteIndexRecords(data) {
    return wizCloudFetch("IndexApi/deleteIndex", data);
}
exports.deleteIndexRecords = deleteIndexRecords;
// bankpages
function importBankPageRecords(data) {
    return wizCloudFetch("BankPagesApi/importBankPage", data);
}
exports.importBankPageRecords = importBankPageRecords;
// data export
function exportDataRecords(data) {
    return wizCloudFetch("ExportDataApi/exportData", data);
}
exports.exportDataRecords = exportDataRecords;
// inv documents
function createDocument(data) {
    return wizCloudFetch("invApi/createDoc", data);
}
exports.createDocument = createDocument;
function showDocument(data) {
    return wizCloudFetch("invApi/getDoc", data);
}
exports.showDocument = showDocument;
function delDocument(data) {
    return wizCloudFetch("invApi/delDocument", data);
}
exports.delDocument = delDocument;
function issueDoc(data) {
    return wizCloudFetch("invApi/issueDocument", data);
}
exports.issueDoc = issueDoc;
// crm
function crmActivities(data) {
    return wizCloudFetch("crmActivitiesApi/createSchema", data);
}
exports.crmActivities = crmActivities;
function crmActivitiesTest(data) {
    return wizCloudFetch("crmActivitiesTest/createSchema", data);
}
exports.crmActivitiesTest = crmActivitiesTest;
// companies list
function getCompanies() {
    return wizCloudFetch("CompanyListToTokenApi/TokenCompanies");
}
exports.getCompanies = getCompanies;
//# sourceMappingURL=wizCloudFetch.js.map
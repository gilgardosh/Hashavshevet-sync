import { wizCloudAuth } from './wizCloudAuth';
import request from 'request';

function wizCloudFetch(path, data = {}) {
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
                        method: 'POST',
                        url,
                    };
                    request.post(options, (error, response, body) => {
                        if (error) {
                            console.log(error);
                            reject(error);
                        } else {
                            resolve(JSON.parse(response.body));
                        }
                    });
                },
                (error) => {
                    console.log('ERR12', error);
                    throw new Error('auth error');
                },
            )
            .catch((e) => {
                console.log('ERR12', e);
                throw new Error('auth error');
            });
    });

    return p;
}

export function napi() {
    return wizCloudFetch('api/napi');
}
// jurnal
export function addTransactionsToBatch(data) {
    return wizCloudFetch('jtransApi/tmpBatch', data);
}
export function checkBatch(data) {
    return wizCloudFetch('jtransApi/chkBatch', data);
}
export function newBatch() {
    return wizCloudFetch('jtransApi/newBatch');
}
export function issueBatch(data) {
    return wizCloudFetch('jtransApi/issueBatch', data);
}
// index
export function importIndexRecords(data) {
    return wizCloudFetch('IndexApi/importIndex', data);
}
export function deleteIndexRecords(data) {
    return wizCloudFetch('IndexApi/deleteIndex', data);
}
// bankpages
export function importBankPageRecords(data) {
    return wizCloudFetch('BankPagesApi/importBankPage', data);
}
// data export
export function exportDataRecords(data) {
    return wizCloudFetch('ExportDataApi/exportData', data);
}
// inv documents
export function createDocument(data) {
    return wizCloudFetch('invApi/createDoc', data);
}
export function showDocument(data) {
    return wizCloudFetch('invApi/getDoc', data);
}
export function delDocument(data) {
    return wizCloudFetch('invApi/delDocument', data);
}
export function issueDoc(data) {
    return wizCloudFetch('invApi/issueDocument', data);
}
// crm
export function crmActivities(data) {
    return wizCloudFetch('crmActivitiesApi/createSchema', data);
}
export function crmActivitiesTest(data) {
    return wizCloudFetch('crmActivitiesTest/createSchema', data);
}
// companies list
export function getCompanies() {
    return wizCloudFetch('CompanyListToTokenApi/TokenCompanies');
}

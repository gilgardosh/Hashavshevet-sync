import * as fs from "fs";
import { config } from "dotenv";

config();

const bankUserCode = process.env.BANK_USER_CODE;
const bankPassword = process.env.BANK_PASSWORD;
const accountsData = [];

const bankCsvDict = {
  "קוד תנועה": "transID",
  תאריך: "valueDate",
  "תיאור הפעולה": "Description",
  חשבון: "Account",
  אסמכתא: "Reference",
  "תאריך ערך": "DueDate",
  חובה: "DebVal",
  זכות: "CredVal",
  "יתרה לאחר פעולה": "PostBalance",
};

const bankApiDict = {
  "type": "TransType",
  "identifier": "transID",
  "date": "DueDate",
  "processedDate": "valueDate",
  "originalAmount": "OriginalSuF",
  "originalCurrency": "CurrencyCode",
  "chargedAmount": "SuF",
  "description": "Details",
  "status": 'completed',
  "memo": "Reference"
}

async function getBankData(startDate) {
  const { createScraper } = require("israeli-bank-scrapers");

  const credentials = {
    userCode: bankUserCode,
    password: bankPassword,
  };
  const options = {
    companyId: "hapoalim",
    startDate,
    combineInstallments: false, // if set to true, all installment transactions will be combine into the first one
    showBrowser: true, // shows the browser while scraping, good for debugging (default false)
    verbose: false, // include more debug info about in the output
  };

  return await (async function () {
    try {
      const scraper = createScraper(options);
      const scrapeResult = await scraper.scrape(credentials);

      if (scrapeResult.success) {
        scrapeResult.accounts.forEach((account) => {
          // console.log(`found ${account.txns.length} transactions for account number
          //   ${account.accountNumber}`);
          accountsData.push(keysToHashFormat(account.txns, bankApiDict));
        });
        return accountsData;
      } else {
        throw new Error(scrapeResult.errorType);
      }
    } catch (e) {
      console.error(`scraping failed for the following reason: ${e.message}`);
    }
  })();
  /* code for local file proccessing (function should get file address as csvLink)
  ////////////////////////////////////////////////////////////////////////////////
  const csvLink = process.env.CSV_LINK;
  const lines = fs.readFileSync(csvLink).toString().split("\n");
  const result = [];
  const headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue;
    const obj = {};
    const currentline = lines[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return [keysToHashFormat(result, bankCsvDict)];
  //////////////////////////////////////////////////////////////////////////////*/
}

function keysToHashFormat(data: object[], keyDict) {

  function arrayKeysToLatin(allTransData: object[]) {
    for (let i = 0; i < allTransData.length; i++) {
      allTransData[i] = objectKeysToLatin(allTransData[i]);
    }
    return allTransData;
  }

  function objectKeysToLatin(singleTransData: object) {
    const newData = {};
    for (const key in singleTransData)
      if (singleTransData.hasOwnProperty(key)) {
        const trimKey = key.trim();
        if (trimKey === "") {
          continue;
        }
        if (singleTransData[key] != null) {
          if (keyDict[trimKey]) {
            if (typeof(keyDict[trimKey])=="string") {keyDict[trimKey].trim()};
            newData[keyDict[trimKey]] = singleTransData[key];
          } else {
            console.log("ERROR: missing key in dictionary", trimKey);

            newData["unknown_'" + trimKey + "'"] = singleTransData[key];
          }
        }
      }
    return newData;
  }
  return arrayKeysToLatin(data);
}

export { getBankData };

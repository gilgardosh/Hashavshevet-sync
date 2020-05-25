import { config } from "dotenv";

config();

const bankUserCode = process.env.BANK_USER_CODE;
const bankPassword = process.env.BANK_PASSWORD;
const accountsData = [];

const bankApiDict = {
  type: "TransType",
  identifier: "bankIdentifier",
  date: "DueDate",
  processedDate: "valueDate",
  originalAmount: "OriginalSuF",
  originalCurrency: "CurrencyCode",
  chargedAmount: "SuF",
  description: "Details",
  status: "completed",
  memo: "Reference",
};

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

  return await (async () => {
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
}

async function getBankDemiData(startDate) {
  const bankData = require("../../demiData/demiBankData.json");
  const translatedBankData = [];
  translatedBankData.push(keysToHashFormat(bankData, bankApiDict));
  return new Promise((resolve, reject) => {
    resolve(translatedBankData);
  });
}

function keysToHashFormat(data: object[], keyDict) {
  function arrayKeysToLatin(allTransData: object[]) {
    for (const i in allTransData) {
      if (i) {
        allTransData[i] = transKeysToFormat(allTransData[i]);
      }
    }
    return allTransData;
  }

  function transKeysToFormat(singleTransData: object) {
    const newData = {};
    for (const key in singleTransData)
      if (singleTransData.hasOwnProperty(key)) {
        const trimKey = key.trim();
        if (trimKey === "") {
          continue;
        }
        if (singleTransData[key] != null) {
          if (keyDict[trimKey]) {
            if (typeof keyDict[trimKey] === "string") {
              keyDict[trimKey].trim();
            }
            newData[keyDict[trimKey]] = singleTransData[key];
          } else {
            console.log("ERROR: missing key in dictionary", trimKey);

            newData["unknown_'" + trimKey + "'"] = singleTransData[key];
          }
        }
      }
    newData["transID"] = `${newData["valueDate"] + newData["SuF"]}`;
    return newData;
  }
  return arrayKeysToLatin(data);
}

export { getBankData, getBankDemiData };

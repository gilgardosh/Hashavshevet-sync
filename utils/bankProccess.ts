import * as fs from "fs";

const keyDict = {
  "קוד תנועה": "transID",
  "תאריך": "valueDate",
  "תיאור הפעולה": "Description",
  "חשבון": "Account",
  "אסמכתא": "Reference",
  "תאריך ערך": "DueDate",
  "חובה": "DebVal",
  "זכות": "CredVal",
  "יתרה לאחר פעולה": "PostBalance"
}

function getBankData(csvLink) {
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
  return keysToLatin(result);
}

function keysToLatin(data: object[]) {
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
        if (trimKey === "" && singleTransData[key].trim() === "") {
          continue;
        }
        if (singleTransData[key] != null) {
          if (keyDict[trimKey]) {
            newData[keyDict[trimKey]] = singleTransData[key].trim();
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

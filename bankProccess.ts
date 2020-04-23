import * as fs from "fs";

function getBankData(csvLink) {
  var lines = fs.readFileSync(csvLink).toString().split("\n");
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

function keysToLatin(data: Array<object>) {
  const keyDict = require("./keyTransDict.json");

  function arrayKeysToLatin(data: Array<Object>) {
    for (let i = 0; i < data.length; i++) {
      data[i] = objectKeysToLatin(data[i]);
    }
    return data;
  }

  function objectKeysToLatin(data: Object) {
    const newData = {};
    for (let key in data) {
      let trimKey = key.trim();
      if (trimKey == "" && data[key].trim() == "") { continue; };
      if (data[key] != null) {
        if (keyDict[trimKey]) {
          newData[keyDict[trimKey]] = data[key].trim();
        } else {
          console.log("ERROR: missing key in dictionary", trimKey);

          newData["unknown_'" + trimKey+"'"] = data[key];
        }
      }
    }
    return newData;
  }

  return arrayKeysToLatin(data);
}

export { getBankData };

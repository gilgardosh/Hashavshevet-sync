import * as fs from "fs";
import csvParser from "csv-parser";

function getBankData() {
  const bankData: Array<Object> = [];

  fs.createReadStream("./demiBankData.csv")
    .pipe(csvParser())
    .on("data", (data) => bankData.push(data))
    .on("end", () => {
      // console.log("Bank Data:", bankData);
    });
  return bankData;
}

export { getBankData };
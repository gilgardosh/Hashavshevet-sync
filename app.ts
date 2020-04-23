import { getHashData } from "./wizcloudProccess";
import { getBankData } from "./bankProccess";

let hashData: Array<Object>;
let bankData: Array<Object> = (getBankData("./demiBankData.csv"));

getHashData().then((res) => {
  hashData = res;
  // console.log(hashData);

});
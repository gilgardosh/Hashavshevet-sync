import { keysToLatin, getHashData } from "./wizcloudProccess";
import { getBankData } from "./bankProccess";

let bankData = getBankData();
let hashData: Array<Object> = [];

getHashData().then((res) => {
  hashData = keysToLatin(res);
  console.log(hashData);
  
});

console.log(bankData);

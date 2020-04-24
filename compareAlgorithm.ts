function compareBankHashCata(bankData, hashData) {
    const matchTrans = {};
    const diffrentTrans = {
      "bank": {},
      "hashavshevet": {}
    };
    for (let i=0; i<bankData.length; i++) {      
      let bankSuF = (isNaN(parseFloat(bankData[i]["DebVal"].trim()))) ? parseFloat(bankData[i]["CredVal"].trim()) : parseFloat(bankData[i]["DebVal"].trim());
      let bankDate = bankData[i]["valueDate"];
  innerloop:
      for (let j=0; j<hashData.length; j++) {
        const hashSuF = parseFloat(hashData[j]["suF"]);
        const hashDate = (typeof hashData[j]["valueDate"] == "string") ? hashData[j]["valueDate"].substr(0, hashData[j]["valueDate"].indexOf("T")) : "";

        // if same valueDate and suF add IDs to matchTrans
        if (bankDate==hashDate && bankSuF == hashSuF) {
          matchTrans[hashData[j]["transID"]] = bankData[i]["transID"];
          break innerloop;
        }
      }
      
      // if no match, add bank trans. to defferentTrans
      diffrentTrans["bank"][bankData[i]["transID"]] = bankData[i];
    }

    //loop hashData, if id !in match add to defferentTrans
    
    return {
        "matchTrans": matchTrans,
        "diffrentTrans": diffrentTrans
    };
  }

  export { compareBankHashCata };
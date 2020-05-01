function compareBankHashData(bankData, hashData) {
  const matchTrans = {};
  const diffrentTrans = {
    bank: {},
    hashavshevet: {},
  };
  
  outerloop: for (const bankTrans of bankData[0]) {
    const bankSuF = bankTrans.SuF;
    const bankDate = bankTrans.valueDate;
 
    for (const hashTrans of hashData) {
      const hashSuF = parseFloat(hashTrans.suF);
      const hashDate =
        typeof hashTrans.valueDate === "string"
          ? hashTrans.valueDate.substr(0, hashTrans.valueDate.indexOf("T"))
          : "";
      // if same valueDate and suF add IDs to matchTrans
      if (bankDate === hashDate && bankSuF === hashSuF) {
        matchTrans[hashTrans.transID] = bankTrans.transID;
        continue outerloop;
      }
    }
    // if no match, add bank transaction to defferentTrans
    diffrentTrans.bank[bankTrans.transID] = bankTrans;
  }

  // if no match, add hashavshevet transaction to defferentTrans
  for (const hashTrans of hashData) {
    if (!(hashTrans.transID in matchTrans)) {
      diffrentTrans.hashavshevet[hashTrans.transID] = hashTrans;
    }
  }

  return {
    matchTrans,
    diffrentTrans,
  };
}

export { compareBankHashData };

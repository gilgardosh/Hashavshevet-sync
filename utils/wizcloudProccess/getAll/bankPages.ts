import { getAllBankPageRecords } from "./bankPageRecords";

async function getAllBankPages() {
  const uniqueBankPagesList = [];
  const map = new Map();
  for (const bankPage of await getAllBankPageRecords()) {
    if (!map.has(bankPage["bank_page_id"])) {
      map.set(bankPage["bank_page_id"], true);
      uniqueBankPagesList.push({ id: bankPage["bank_page_id"] });
    }
  }
  return uniqueBankPagesList;
}

export { getAllBankPages };

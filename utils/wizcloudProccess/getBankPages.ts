import DataLoader from "dataloader";
import { getAllBankPageRecords } from "./getBankPageRecords";

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

const bankPageByIdLoader = new DataLoader(async (bankPageIds) => {
  let bankPagesList = await getAllBankPages();
  return bankPageIds.map((id) => {
    return bankPagesList.find((page) => page.id === id);
  });
});

export { getAllBankPages, bankPageByIdLoader };

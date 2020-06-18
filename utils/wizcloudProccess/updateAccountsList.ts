import graphqlCall from "../graphql/graphqlCall";
import * as type from "../graphql/types/types";

async function getAccountsList() {
  const query = `
  {
    accounts {
      agent
      address
      accountant_transfer
      authorized_dealer_number
      bank_id
      balance_code
      bank_branch_id
      bank_account_id
      city
      country
      cellphone
      costing_code
      central_account
      details
      email
      fax
      general_discount_percent
      id
      init_date
      is_active
      income_file_number
      max_credit
      max_obligo
      main_account
      max_credit_currency
      max_obligo_currency
      name
      occupation
      phone
      sector
      type
      vat_exempt
      withholding_percent
      withholding_validity
      zipcode
    }
  }`;
  const res: type.Query = await graphqlCall(query);
  const accounts = res.getAccounts;
  return Object.assign(
    {},
    ...accounts.map((account) => ({ [account.id]: account }))
  );
}

export { getAccountsList };

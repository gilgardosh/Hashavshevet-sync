import express from 'express';
import expressGraphQL from 'express-graphql';
import { schemaInitiator } from './src/schema';
import bodyParser from 'body-parser';

import { graphql } from 'graphql';
import { readFileSync } from 'fs';
import { sortBy, reverse, intersectionWith, differenceWith } from 'lodash';
import moment from 'moment';
import { config } from 'dotenv';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

config();

const WIZ_KEY = process.env.DEP_WIZ_KEY;
const WIZ_COMPANY = process.env.DEP_WIZ_COMPANY;
const WIZ_URL = process.env.DEP_WIZ_URL;

const schema = schemaInitiator(WIZ_KEY, WIZ_COMPANY, WIZ_URL);

app.use(
  '/graphql',
  expressGraphQL({
    graphiql: true,
    schema,
  }),
);

app.listen(PORT, () => {
  console.log(`GrapiQL Server Running on http://localhost:${PORT}/graphql`);
});

async function inputToHashavshevet() {
  const mayTransactions = JSON.parse(readFileSync('./Amsterdam_01_2020.json', 'utf8'));

  const transactionsListToMutation = [];

  function parseTransToIntToZero(amount) {
    return amount && amount != '' ? parseFloat(amount) : 0;
  }

  function parseTransToIntToNull(amount) {
    return amount && amount != '' ? parseFloat(amount) : null;
  }

  for (const transaction of mayTransactions) {
    const overallSum =
      transaction.סכום_חובה_1 && transaction.סכום_חובה_1 != ''
        ? parseTransToIntToZero(transaction.סכום_חובה_1) + parseTransToIntToZero(transaction.סכום_חובה_2)
        : parseTransToIntToZero(transaction.סכום_זכות_1) + parseTransToIntToZero(transaction.סכום_זכות_2);

    const overallForeignSum =
      transaction.סכום_חובה_1 && transaction.סכום_חובה_1 != ''
        ? parseTransToIntToZero(transaction.מטח_סכום_חובה_1) + parseTransToIntToZero(transaction.מטח_סכום_חובה_2)
        : parseTransToIntToZero(transaction.מטח_סכום_זכות_1) + parseTransToIntToZero(transaction.מטח_סכום_זכות_2);

    const transactionToInput = {
      dueDate: transaction.תאריך_ערך, // TODO: Fix after they fix
      debtorId: transaction.חשבון_חובה_1,
      creditorId: transaction.חשבון_זכות_1,
      shekelSum: overallSum,
      foreignCurrencySum: overallForeignSum,
      currencyCode: transaction.מטבע,
      description: transaction.פרטים.replace('״', '').replace('"', ''),
      reference1: parseTransToIntToNull(transaction.אסמכתא_1),
      reference2: parseTransToIntToNull(transaction.אסמכתא_2),
      valueDate: transaction.תאריך_חשבונית, // TODO: Fix after they fix
      date3: transaction.תאריך_3,
      details1: transaction.id,
      type: transaction.סוג_תנועה,
      records: [],
    };

    if (parseTransToIntToNull(transaction.סכום_חובה_1)) {
      transactionToInput.records.push({
        accountId: transaction.חשבון_חובה_1,
        debitOrCreditNumber: 'Debit',
        shekelSum: parseTransToIntToZero(transaction.סכום_חובה_1),
        foreignCurrencySum: parseTransToIntToNull(transaction.מטח_סכום_חובה_1),
      });
    }

    if (parseTransToIntToNull(transaction.סכום_זכות_1)) {
      transactionToInput.records.push({
        accountId: transaction.חשבון_זכות_1,
        debitOrCreditNumber: 'Credit',
        shekelSum: parseTransToIntToZero(transaction.סכום_זכות_1),
        foreignCurrencySum: parseTransToIntToNull(transaction.מטח_סכום_זכות_1),
      });
    }

    if (parseTransToIntToNull(transaction.סכום_חובה_2)) {
      transactionToInput.records.push({
        accountId: transaction.חשבון_חובה_2,
        debitOrCreditNumber: 'Debit',
        shekelSum: parseTransToIntToZero(transaction.סכום_חובה_2),
        foreignCurrencySum: parseTransToIntToNull(transaction.מטח_זכות_חובה_2),
      });
    }

    if (parseTransToIntToNull(transaction.סכום_זכות_2)) {
      transactionToInput.records.push({
        accountId: transaction.חשבון_זכות_2,
        debitOrCreditNumber: 'Credit',
        shekelSum: parseTransToIntToZero(transaction.סכום_זכות_2),
        foreignCurrencySum: parseTransToIntToNull(transaction.מטח_סכום_זכות_2),
      });
    }

    transactionsListToMutation.push(transactionToInput);

    const inputVariables = {
      batchId: 151,
      insertToLastBatch: false,
      checkBatch: false,
      issueBatch: false,
      transactionsList: [transactionToInput],
    };

    const createTransactionMutation = `
    mutation AddTransactionToBatch(
      $batchId: Int!,
      $insertToLastBatch: Boolean,
      $checkBatch: Boolean,
      $issueBatch: Boolean,
      $transactionsList: [PostTransaction]) {
        postTransactionsToBatch (
          batchId: $batchId,
          insertToLastBatch: $insertToLastBatch,
          checkBatch: $checkBatch,
          issueBatch: $issueBatch
          transactionsList: $transactionsList) {
            ... on PostTransactionsResponsWithoutErrors {
              status
              batchno
              batchId
              batch {
                transactions {
                  id
                }
              }
            }
          ... on PostTransactionsResponsWithoutErrors {
            batch {
              transactions {
                id
              }
            }
          }
      }
    }
  `;

    if (
      parseTransToIntToZero(transaction.סכום_חובה_1) +
        parseTransToIntToZero(transaction.סכום_חובה_2) +
        parseTransToIntToZero(transaction.סכום_זכות_1) +
        parseTransToIntToZero(transaction.סכום_זכות_2) !=
      0
    ) {
      try {
        const result = await graphql(schema, createTransactionMutation, null, null, inputVariables);
        console.log(JSON.stringify(result));
        if (result.errors) {
          console.log(result);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function compareHashavshevetToDB() {
  const getTransactions = `
  {
    getTransactions {
      id
      dueDate
      creditorId
      shekelSum
      foreignCurrencySum
      debtorId
      currencyCode
      records {
        debitOrCredit
        counterAccountId
        accountId
        shekelCredit
        shekelDebit
        shekelSum
        foreignCurrencySum
        foreignCurrencyCredit
        foreignCurrencyDebit
      }
      description
      reference1
      reference2
      type
      valueDate
      date3
      details1
      batchId
    }
  }
`;

  try {
    const result = await graphql(schema, getTransactions);
    // let sortedTransactions = sortBy(result.data.getTransactions, ['date']);
    const sortedTransactions = reverse(
      sortBy(result.data.getTransactions, (transaction) => new Date(transaction.dueDate)),
    );
    console.log(sortedTransactions[20].description);
    console.log(sortedTransactions[20].shekelSum);
    console.log(sortedTransactions[20].dueDate);
    console.log(moment(sortedTransactions[20].dueDate).format('DD/MM/YYYY'));
  } catch (error) {
    console.log(error);
  }
}

async function compareHashavshevetBankTransactionsToDB() {
  const getTransactions = `
  {
    getBankPageRecords {
      id
      reference
      debitOrCredit
      cumulativeBalance
      cumulativeBalanceCalculated
      accountId
      sum
      details
      date
      adjustedRecord
    }
  }
`;

  try {
    const result = await graphql(schema, getTransactions);
    const filteredTransactions = result.data.getBankPageRecords.filter((transaction) => transaction.accountId == 'עוש');
    const sortedTransactions = reverse(sortBy(filteredTransactions, (transaction) => new Date(transaction.date)));
    console.log(JSON.stringify(result.data.getBankPageRecords[100]));
  } catch (error) {
    console.log(error);
  }
}

async function inputBankPagesToHashavshevet() {
  const transactions = JSON.parse(readFileSync('./merged_tables.json', 'utf8'));
  for (const transaction of transactions) {
    let accountId = '';
    switch (transaction.account_type) {
      case 'checking_ils':
        accountId = 'עוש';
        break;
      case 'checking_eur':
        accountId = 'עוש2';
        break;
      case 'checking_usd':
        accountId = 'עוש1';
        break;
      default:
        console.error('unknown account type', transaction.account_type);
    }

    const bankPageToInput = {
      accountId: accountId,
      reference: transaction.bank_reference,
      creditOrDebit: transaction.event_amount > 0 ? 'Credit' : 'Debit',
      sum: Math.abs(transaction.event_amount),
      details: transaction.bank_description.replace('״', '').replace('"', ''),
      date: moment(transaction.event_date, 'YYYY-MM-DD').format('DD/MM/YYYY'),
    };

    const inputVariables = {
      bankPageRecords: [bankPageToInput],
    };

    const addBankPagehMutation = `
      mutation AddBankPage($bankPageRecords: [PostBankPageRecord]!) {
        postBankPage(bankPageRecords: $bankPageRecords) {    
          status
          errors {
            index
            err
          }
        }
      }
    `;

    try {
      console.log(bankPageToInput);
      const result = await graphql(schema, addBankPagehMutation, null, null, inputVariables);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}

// inputToHashavshevet();
// inputBankPagesToHashavshevet();
// compareHashavshevetToDB();
// compareHashavshevetBankTransactionsToDB();

// console.log(transactionsListToMutation);
// console.log(JSON.stringify(inputVariables));

// executeSync(2);

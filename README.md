# hashavshevet-sync

# pre-use:
Prepare your WizcloudApiPrivateKey (personal token) and WizcloudApiDBName (company key):

- WWizcloudApiPrivateKey is created/viewed within the wizcloud UI. You can find it at נתונים כלליים > תונכניות עזר > ניהול אסימוני הרשאות

- WizcloudApiDBName can be retrieved from the companies list page (the landing page after logging into wizcloud). When a company description is hovered (even if it's an empty description), a tooltip with the key appears

# deploy:
create .env file, and add the following:
  WIZ_KEY={personal token here}
  WIZ_COMPANY={company key here}

$ npm i

on app.ts you can manage how far back (in months) data will sync.
look for:
  executeSync(2);
and change the digit (2 by default) to whatever int you need.

# development:
$ npm run dev

# fixes awaiting:
- bank transaction unique ID:
  not given by israeli-bank-scrapers. for now, it's defined as string of valuedate+suF, but could happen that two transactions share these same details.

- only one account:
  needed to improve so can collect data from many accounts, and not only "hapoalim"

- tests needed

- local database creation (with in-app ID)

- handling "accountsList" update, instead of replace

- handling issued and temporary hashavshevet batches differently

- smart algorithm to compare transactions

# technical issues:
- how to manage temporary inputs to hashavshevet
- differentiate handling temp and issued batches
- what to do with hashavshevet transactions that doesn't appear in bank accounts?
- response keys with different types handling (examp. ./graphql/types/recordsTransactions => addTransactionsResponsType function)
- add record and transaction errors (from checkBatch) as data in original type
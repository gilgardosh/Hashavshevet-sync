# hashavshevet-sync

# deploy:
create .env file, and add the following:
WIZ_KEY={wiz token here}
WIZ_COMPANY={company code here}

BANK_USER_CODE={bank user code here}
BANK_PASSWORD={bank password here}


$ npm i

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
- how to define personal account for hashavshevet inputs (the "me" side from bank transactions)
- how to manage temporary inputs to hashavshevet
- differentiate handling temp and issued batches
- what to do with hashavshevet transactions that doesn't appear in bank accounts?
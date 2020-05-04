# hashavshevet-sync

# deploy:
create .env file, and add the following:
WIZ_KEY={wiz key here}
WIZ_COMPANY={company code here}

BANK_USER_CODE={bank user code here}
BANK_PASSWORD={bank password here}

CSV_LINK={link to csv bank data file}  //optional, not needed if reading live from bank

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
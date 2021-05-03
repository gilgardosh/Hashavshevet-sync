import { config } from 'dotenv';
import fetch from 'node-fetch';

config();

const wizKey = process.env.WIZ_KEY; // copied from apiPermits.html
const company = process.env.WIZ_COMPANY; // wizcloud server domain, defaults to wizcloud.co.il;

function wizCloudAuth() {
  const p = new Promise((resolve, reject) => {
    if (!wizKey) {
      reject(new Error('Missing Hashavshevet ser key or company ID'));
      return;
    }
    const url = `https://lb1.wizcloud.co.il/createSession/${wizKey}/${company}`;
    fetch(url)
      .then((res) => res.text())
      .then((authToken) => resolve(authToken))
      .catch((error) => reject(new Error(`auth http fail: ${error}`)));
  });
  return p;
}

export { wizCloudAuth };

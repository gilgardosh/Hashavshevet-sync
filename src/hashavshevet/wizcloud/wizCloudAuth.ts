import { config } from 'dotenv';
import fetch from 'node-fetch';

config();

function wizCloudAuth(wizKey: string, company: string, wizUrl: string) {
  const p = new Promise((resolve, reject) => {
    if (!wizKey) {
      reject(new Error('Missing Hashavshevet ser key or company ID'));
      return;
    }
    const url = `${wizUrl}createSession/${wizKey}/${company}`;
    fetch(url)
      .then((res) => res.text())
      .then((authToken) => {
        if (authToken === 'iligal token') {
          reject(new Error('ilegal token'));
        }
        resolve(authToken);
      })
      .catch((error) => reject(new Error(`auth http fail: ${error}`)));
  });
  return p;
}

export { wizCloudAuth };

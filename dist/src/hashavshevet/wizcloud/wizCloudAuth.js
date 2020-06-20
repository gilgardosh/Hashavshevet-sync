"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const node_fetch_1 = __importDefault(require("node-fetch"));
dotenv_1.config();
const wizKey = process.env.WIZ_KEY; // copied from apiPermits.html
const company = process.env.WIZ_COMPANY; // wizcloud server domain, defaults to wizcloud.co.il;
function wizCloudAuth() {
    const p = new Promise((resolve, reject) => {
        if (!wizKey) {
            reject({ reason: "Missing Hashavshevet ser key or company ID" });
            return;
        }
        const url = `https://lb1.wizcloud.co.il/createSession/${wizKey}/${company}`;
        node_fetch_1.default(url)
            .then((res) => res.text())
            .then((authToken) => resolve(authToken))
            .catch((error) => reject({ reason: "auth http fail", err: error }));
    });
    return p;
}
exports.wizCloudAuth = wizCloudAuth;
//# sourceMappingURL=wizCloudAuth.js.map
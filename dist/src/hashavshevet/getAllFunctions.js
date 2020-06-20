"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const hashavshevet_1 = require("./hashavshevet");
const dataFile = __importStar(require("./dataFiles"));
function getAll(datafile, parameters = []) {
    const data = {
        datafile,
        parameters: [],
    };
    if (parameters.length)
        data.parameters = parameters;
    return hashavshevet_1.exportDataRecords(data);
}
function getAllRecords() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield getAll(dataFile.records);
    });
}
exports.getAllRecords = getAllRecords;
function getAllTransactions() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield getAll(dataFile.transactions);
    });
}
exports.getAllTransactions = getAllTransactions;
function getAllBatches() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield getAll(dataFile.batches);
    });
}
exports.getAllBatches = getAllBatches;
function getAllAccounts() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield getAll(dataFile.accounts);
    });
}
exports.getAllAccounts = getAllAccounts;
function getAllBankPageRecords() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield getAll(dataFile.bankPageRecords);
    });
}
exports.getAllBankPageRecords = getAllBankPageRecords;
__export(require("./wizcloud/wizCloudFetch"));
//# sourceMappingURL=getAllFunctions.js.map
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataloader_1 = __importDefault(require("dataloader"));
const resolver = __importStar(require("./resolvers"));
const recordById = new dataloader_1.default((recordIds) => __awaiter(void 0, void 0, void 0, function* () {
    const recordsList = yield resolver.allRecords();
    return recordIds.map((id) => {
        return recordsList.find((record) => record.id === id);
    });
}));
exports.recordById = recordById;
const recordsByTransactionId = new dataloader_1.default((transactionIds) => __awaiter(void 0, void 0, void 0, function* () {
    const recordsList = yield resolver.allRecords();
    return transactionIds.map((id) => {
        return recordsList.filter((record) => record.transactionId === id);
    });
}));
exports.recordsByTransactionId = recordsByTransactionId;
const recordsByBatcnId = new dataloader_1.default((batchIds) => __awaiter(void 0, void 0, void 0, function* () {
    const recordsList = yield resolver.allRecords();
    return batchIds.map((id) => {
        return recordsList.filter((record) => record.batchId === id);
    });
}));
exports.recordsByBatcnId = recordsByBatcnId;
const transactionById = new dataloader_1.default((transacrionIds) => __awaiter(void 0, void 0, void 0, function* () {
    const transactionsList = yield resolver.allTransactions();
    return transacrionIds.map((id) => {
        return transactionsList.find((transaction) => transaction.id === id);
    });
}));
exports.transactionById = transactionById;
const transactionsByBatcnId = new dataloader_1.default((batchIds) => __awaiter(void 0, void 0, void 0, function* () {
    const transactionsList = yield resolver.allTransactions();
    return yield batchIds.map((id) => {
        return transactionsList.filter((transaction) => transaction.batchId === id);
    });
}));
exports.transactionsByBatcnId = transactionsByBatcnId;
const batchById = new dataloader_1.default((batchIds) => __awaiter(void 0, void 0, void 0, function* () {
    const batchesList = yield resolver.allBatches();
    return batchIds.map((id) => {
        return batchesList.find((batch) => batch.id === id);
    });
}));
exports.batchById = batchById;
const accountById = new dataloader_1.default((accountIds) => __awaiter(void 0, void 0, void 0, function* () {
    const accountsList = yield resolver.allAccounts();
    return accountIds.map((id) => {
        return accountsList.find((account) => account.id === id);
    });
}));
exports.accountById = accountById;
const bankPageRecordById = new dataloader_1.default((bankPageRecordIds) => __awaiter(void 0, void 0, void 0, function* () {
    const bankPageRecordsList = yield resolver.allBankPageRecords();
    return bankPageRecordIds.map((id) => {
        return bankPageRecordsList.find((record) => record.id === id);
    });
}));
exports.bankPageRecordById = bankPageRecordById;
const bankPageRecordsByBankPageId = new dataloader_1.default((bankPageIds) => __awaiter(void 0, void 0, void 0, function* () {
    const bankPageRecordsList = yield resolver.allBankPageRecords();
    return bankPageIds.map((id) => {
        return bankPageRecordsList.filter((bankPageRecord) => bankPageRecord.bankPageId === id);
    });
}));
exports.bankPageRecordsByBankPageId = bankPageRecordsByBankPageId;
const bankPageById = new dataloader_1.default((bankPageIds) => __awaiter(void 0, void 0, void 0, function* () {
    const bankPagesList = yield resolver.allBankPages();
    return bankPageIds.map((id) => {
        return bankPagesList.find((page) => page.id === id);
    });
}));
exports.bankPageById = bankPageById;
//# sourceMappingURL=loaders.js.map
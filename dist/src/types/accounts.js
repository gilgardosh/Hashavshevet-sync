"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const field = __importStar(require("./fields"));
const AccountType = new graphql_1.GraphQLObjectType({
    name: "Account",
    description: "A Single Account",
    fields: () => ({
        id: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: "Account identifier (max 15 characters)",
        },
        name: field.accountName,
        sortGroup: field.sortGroup,
        filter: field.filter,
        details: field.details1,
        initDate: field.initDate,
        type: field.accountType,
        isActive: field.isActive,
        address: field.address,
        city: field.city,
        zipcode: field.zipcode,
        country: field.country,
        phone: field.phone,
        cellphone: field.cellphone,
        fax: field.fax,
        email: field.email,
        balanceCode: field.balanceCode,
        generalDiscountPercent: field.generalDiscountPercent,
        vatExempt: field.vatExempt,
        occupation: field.occupation,
        agent: field.agent,
        withholdingPercent: field.withholdingPercent,
        withholdingValidity: field.withholdingValidity,
        bankId: field.bankId,
        bankBranchId: field.bankBranchId,
        bankAccountId: field.bankAccountId,
        authorizedDealerNumber: field.authorizedDealerNumber,
        mainAccount: field.mainAccount,
        maxCredit: field.maxCredit,
        maxCreditCurrency: field.maxCreditCurrency,
        maxObligo: field.maxObligo,
        maxObligoCurrency: field.maxObligoCurrency,
        incomeFileNumber: field.incomeFileNumber,
        centralAccount: field.centralAccount,
        accountantTransfer: field.accountantTransfer,
        costingCode: field.costingCode,
    }),
});
exports.AccountType = AccountType;
//# sourceMappingURL=accounts.js.map
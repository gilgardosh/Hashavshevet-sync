import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import * as field from "./fields";

const AccountType = new GraphQLObjectType({
  name: "Account",
  description: "A Single Account",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLString),
      description: "Account identifier (max 15 characters)", // TODO: add varification
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

export { AccountType };

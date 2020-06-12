import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  /** A Single Record by its ID */
  getRecordById?: Maybe<Record>;
  /** List of All Records */
  getRecords?: Maybe<Array<Maybe<Record>>>;
  /** A Single Transaction by its ID */
  getTransactionById?: Maybe<Transaction>;
  /** List of All Transactions */
  getTransactions?: Maybe<Array<Maybe<Transaction>>>;
  /** A Single Batch by its ID */
  getBatchById?: Maybe<Batch>;
  /** List of All Batches */
  getBatches?: Maybe<Array<Maybe<Batch>>>;
  /** A Single Account by its ID */
  getAccountById?: Maybe<Account>;
  /** List of All Accounts */
  getAccounts?: Maybe<Array<Maybe<Account>>>;
  /** A Single Bank Page Record by its ID */
  getBankPageRecordById?: Maybe<BankPageRecord>;
  /** List of All Bank Page Records */
  getBankPageRecords?: Maybe<Array<Maybe<BankPageRecord>>>;
  /** A Single Bank Page (Which Is A List Of Bank Page Records), by its ID */
  getBankPageById?: Maybe<BankPage>;
  /** List Of Bank Pages */
  getBankPages?: Maybe<Array<Maybe<BankPage>>>;
  /** List of Companies for user token thats defined on: 'WizcloudApiPrivateKey' */
  getUserCompanies?: Maybe<Array<Maybe<Company>>>;
  /** Get User Details */
  getUserDetails?: Maybe<HashavshevetUser>;
  /** Checks if there are errors in the batch */
  checkBatch?: Maybe<BatchErrorReport>;
};


export type QueryGetRecordByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetTransactionByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetBatchByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetAccountByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetBankPageRecordByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetBankPageByIdArgs = {
  id: Scalars['Int'];
};


export type QueryCheckBatchArgs = {
  id: Scalars['Int'];
};

/** A Single Record */
export type Record = {
  __typename?: 'Record';
  /** Main account details */
  account?: Maybe<Account>;
  /** Main account details identifier */
  accountId: Scalars['String'];
  /** Batch details */
  batch?: Maybe<Batch>;
  /** Batch identifier */
  batchId: Scalars['Int'];
  /** Counter account details */
  counterAccount?: Maybe<Account>;
  /** Counter account identifier */
  counterAccountId?: Maybe<Scalars['String']>;
  /** Counter account name */
  counterAccountName?: Maybe<Scalars['String']>;
  /** Cumulative balance */
  cumulativeBalance?: Maybe<Scalars['Float']>;
  /** Cumulative balance by sorting code */
  cumulativeBalanceBySortKey?: Maybe<Scalars['Float']>;
  /** Cumulative balance of total open amount of record */
  cumulativeBalanceOfOpenSumInRecord?: Maybe<Scalars['Float']>;
  /** Cumulative balance without opening balance */
  cumulativeBalanceWithoutOpeningBalance?: Maybe<Scalars['Float']>;
  /** Credit / Debit */
  debitOrCredit?: Maybe<Scalars['String']>;
  /** Credit / Debit */
  debitOrCreditNumber?: Maybe<DebitOrCreditNumber>;
  /** Estimated total amount */
  estimatedSum?: Maybe<Scalars['Float']>;
  /** Credit amount in foreign currency */
  foreignCurrencyCredit?: Maybe<Scalars['Float']>;
  /** Cumulative balance in foreign currency */
  foreignCurrencyCumulativeBalance?: Maybe<Scalars['Float']>;
  /** Cumulative balance in foreign currency without opening balance */
  foreignCurrencyCumulativeBalanceWithoutOpeningBalance?: Maybe<Scalars['Float']>;
  /** Dedit amount in foreign currency */
  foreignCurrencyDebit?: Maybe<Scalars['Float']>;
  /** Total amount in foreign currency */
  foreignCurrencySum?: Maybe<Scalars['Float']>;
  /** Total amount in foreign currency closed in record */
  foreignCurrencySumClosedInRecord?: Maybe<Scalars['Float']>;
  /** Total amount in foreign currency open  in record */
  foreignCurrencySunOpenInRecord?: Maybe<Scalars['Float']>;
  /** Record identifier */
  id: Scalars['Int'];
  /** Match number - card analysis */
  matchNumberCardAnalysis?: Maybe<Scalars['Int']>;
  /** Credit amount in NIS */
  shekelCredit?: Maybe<Scalars['Float']>;
  /** Cumulative balance in NIS by filter */
  shekelCumulativeBalanceByFilter?: Maybe<Scalars['Float']>;
  /** Dedit amount in NIS */
  shekelDebit?: Maybe<Scalars['Float']>;
  /** Total NIS amount */
  shekelSum?: Maybe<Scalars['Float']>;
  /** Total NIS amount closed in record */
  shekelSumClosedInRecord?: Maybe<Scalars['Float']>;
  /** Total NIS amount open  in record */
  shekelSumOpenInRecord?: Maybe<Scalars['Float']>;
  /** Transaction details */
  transaction?: Maybe<Transaction>;
  /** Transaction identifier */
  transactionId: Scalars['Int'];
};

/** A Single Account */
export type Account = {
  __typename?: 'Account';
  /** Account identifier (max 15 characters) */
  id: Scalars['String'];
  /** Account name (max 50 characters) */
  name?: Maybe<Scalars['String']>;
  /** Sorting code */
  sortGroup?: Maybe<Scalars['Int']>;
  /** Filtering (5 characters) */
  filter?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  initDate?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  cellphone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  balanceCode?: Maybe<Scalars['String']>;
  generalDiscountPercent?: Maybe<Scalars['Float']>;
  vatExempt?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  agent?: Maybe<Scalars['Int']>;
  withholdingPercent?: Maybe<Scalars['Float']>;
  withholdingValidity?: Maybe<Scalars['String']>;
  bankId?: Maybe<Scalars['String']>;
  bankBranchId?: Maybe<Scalars['String']>;
  bankAccountId?: Maybe<Scalars['String']>;
  authorizedDealerNumber?: Maybe<Scalars['String']>;
  mainAccount?: Maybe<Scalars['String']>;
  maxCredit?: Maybe<Scalars['Float']>;
  maxCreditCurrency?: Maybe<Scalars['String']>;
  maxObligo?: Maybe<Scalars['Float']>;
  maxObligoCurrency?: Maybe<Scalars['String']>;
  incomeFileNumber?: Maybe<Scalars['String']>;
  centralAccount?: Maybe<Scalars['String']>;
  accountantTransfer?: Maybe<Scalars['String']>;
  costingCode?: Maybe<Scalars['String']>;
};

/** A Single Batch */
export type Batch = {
  __typename?: 'Batch';
  /** Batch identifier */
  id: Scalars['Int'];
  /** Type */
  type?: Maybe<Scalars['String']>;
  /** Status */
  status?: Maybe<Scalars['String']>;
  /** Issue date of the batch */
  issueDate?: Maybe<Scalars['String']>;
  /** Remarks */
  details?: Maybe<Scalars['String']>;
  /** Initiate time of the batch */
  initTime?: Maybe<Scalars['String']>;
  /** Initiate date of the batch */
  initDate?: Maybe<Scalars['String']>;
  /** Batch's transactions details list */
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  /** Batch's records details list */
  records?: Maybe<Array<Maybe<Record>>>;
};

/** A Transaction of Some Records */
export type Transaction = {
  __typename?: 'Transaction';
  /** VAT registration number */
  authorizedDealerNumber?: Maybe<Scalars['String']>;
  /** Batch details */
  batch?: Maybe<Batch>;
  /** Batch Identifier */
  batchId: Scalars['Int'];
  /** Branch */
  branch?: Maybe<Scalars['Int']>;
  /** Branch Name */
  branchName?: Maybe<Scalars['String']>;
  /** Cheque Identifier */
  chequeId?: Maybe<Scalars['Int']>;
  /** Cost-center code */
  costingCode?: Maybe<Scalars['String']>;
  /** Cost-center code name */
  costingCodeName?: Maybe<Scalars['String']>;
  /** Cost-center code filter */
  costingCodeFilter?: Maybe<Scalars['String']>;
  /** Main credit account details */
  creditor?: Maybe<Account>;
  /** Main credit account Identifier */
  creditorId?: Maybe<Scalars['String']>;
  /** Currency */
  currencyCode?: Maybe<Scalars['String']>;
  /** Additional date */
  date3?: Maybe<Scalars['String']>;
  /** Main debit account details */
  debtor?: Maybe<Account>;
  /** Main debit account identifier */
  debtorId?: Maybe<Scalars['String']>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Remarks */
  details1?: Maybe<Scalars['String']>;
  /** Additional remarks */
  details2?: Maybe<Scalars['String']>;
  /** Due date */
  dueDate?: Maybe<Scalars['String']>;
  /** exchange rate differences */
  exchangeRateDifferences?: Maybe<Scalars['String']>;
  /** Total amount in foreign currency */
  foreignCurrencySum?: Maybe<Scalars['Float']>;
  /** Transaction Identifier */
  id: Scalars['Int'];
  /** Inventory Identifier */
  inventoryId?: Maybe<Scalars['Int']>;
  /** Linked file */
  linkedFile?: Maybe<Scalars['String']>;
  /** Quantity */
  quantity?: Maybe<Scalars['Float']>;
  /** Transaction's records details list */
  records?: Maybe<Array<Maybe<Record>>>;
  /** Reference */
  reference1?: Maybe<Scalars['Int']>;
  /** Reference-2 */
  reference2?: Maybe<Scalars['Int']>;
  /** Reference-3 */
  reference3?: Maybe<Scalars['Int']>;
  /** Register number */
  registerNumber?: Maybe<Scalars['Int']>;
  /** Total NIS amount */
  shekelSum?: Maybe<Scalars['Float']>;
  /** Identifier of transaction cancelled by Strogno */
  stornoCancelledTransactionId?: Maybe<Scalars['Int']>;
  /** Transaction type code */
  type?: Maybe<Scalars['String']>;
  /** User name */
  username?: Maybe<Scalars['String']>;
  /** Date */
  valueDate?: Maybe<Scalars['String']>;
};

/** Credit / Debit */
export enum DebitOrCreditNumber {
  Credit = 'Credit',
  Debit = 'Debit'
}

/** A Single Bank Page Record */
export type BankPageRecord = {
  __typename?: 'BankPageRecord';
  /** Main account details */
  account?: Maybe<Account>;
  /** Account identifier */
  accountId?: Maybe<Scalars['String']>;
  /** Account name (max 50 characters) */
  accountName?: Maybe<Scalars['String']>;
  /** Adjusted record */
  adjustedRecord?: Maybe<Scalars['String']>;
  /** Bank page details */
  bankPage?: Maybe<BankPage>;
  /** Bank page identifier */
  bankPageId: Scalars['Int'];
  /** Cumulative balance */
  cumulativeBalance?: Maybe<Scalars['Float']>;
  /** Calculated cumulative balance */
  cumulativeBalanceCalculated?: Maybe<Scalars['Float']>;
  /** Credit / Debit */
  debitOrCredit?: Maybe<Scalars['String']>;
  /** Remarks (max 50 characters) */
  details?: Maybe<Scalars['String']>;
  /** Bank page record identifier */
  id: Scalars['Int'];
  /** Match number */
  matchNumber?: Maybe<Scalars['Int']>;
  /** Reference */
  reference?: Maybe<Scalars['Int']>;
  /** Total ammount */
  sum?: Maybe<Scalars['Float']>;
  /** Date */
  date?: Maybe<Scalars['String']>;
};

/** A Single BA Single Bank Page (Which Is A List Of Bank Page Records)atch */
export type BankPage = {
  __typename?: 'BankPage';
  /** Bank page identifier */
  id: Scalars['Int'];
  /** Bank page's records details list */
  bankPageRecords?: Maybe<Array<Maybe<BankPageRecord>>>;
};

/** A Single Hashavshevet Company */
export type Company = {
  __typename?: 'Company';
  Company_File_Name: Scalars['String'];
  Company_Name: Scalars['String'];
  Comp_Vatnum: Scalars['String'];
};

/** A Single User on Hashavshevet */
export type HashavshevetUser = {
  __typename?: 'HashavshevetUser';
  cid: Scalars['String'];
  user: Scalars['String'];
  use_name: Scalars['String'];
  wizcomp_no?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  user_id: Scalars['Int'];
  company_id?: Maybe<Scalars['Int']>;
  branch?: Maybe<Scalars['Int']>;
};

/** An Error Report of a Batch */
export type BatchErrorReport = BatchCheckMessage | BatchCheckList;

export type BatchCheckMessage = {
  __typename?: 'BatchCheckMessage';
  /** Batch check status */
  batch_check?: Maybe<Scalars['String']>;
};

export type BatchCheckList = {
  __typename?: 'BatchCheckList';
  /** Batch check errors list */
  batch_check?: Maybe<Array<Maybe<ARecordErrorDetails>>>;
};

export type ARecordErrorDetails = {
  __typename?: 'ARecordErrorDetails';
  /** Transaction identifier. AKA transactionId */
  headerID?: Maybe<Scalars['String']>;
  /** Error code */
  err?: Maybe<Scalars['Int']>;
  /** Record identifier. AKA recordId */
  recId?: Maybe<Scalars['Int']>;
  /** Field name where error occurred */
  field?: Maybe<Scalars['String']>;
  /** Error message */
  TxtMsg?: Maybe<Scalars['String']>;
  /** Transaction details */
  transaction?: Maybe<Batch>;
  /** Record details */
  record?: Maybe<Batch>;
};

/** Root Mutation */
export type Mutation = {
  __typename?: 'Mutation';
  /** Opens a new batch and return the number */
  newBatch?: Maybe<NewBatch>;
  /** Checks and inputs the temporary batch into the permanent storage */
  issueBatch?: Maybe<IsuueBatch>;
  /** Import transactions to a new or already existing temporary batch. You may check for errors or input the batch into the permanent storage (if no errors were found). */
  postTransactionsToBatch?: Maybe<PostTransactionsResponse>;
  /** Import  or update records to chosen index */
  postBankPage?: Maybe<PostBankPageResponse>;
};


/** Root Mutation */
export type MutationIssueBatchArgs = {
  id?: Maybe<Scalars['Int']>;
};


/** Root Mutation */
export type MutationPostTransactionsToBatchArgs = {
  batchId?: Maybe<Scalars['Int']>;
  checkBatch?: Maybe<Scalars['Boolean']>;
  insertToLastBatch?: Maybe<Scalars['Boolean']>;
  issueBatch?: Maybe<Scalars['Boolean']>;
  transactionsList?: Maybe<Array<Maybe<PostTransaction>>>;
};


/** Root Mutation */
export type MutationPostBankPageArgs = {
  bankPageRecords?: Maybe<Array<Maybe<PostBankPageRecord>>>;
};

export type NewBatch = {
  __typename?: 'NewBatch';
  /** New Batch's identifier */
  newbatch?: Maybe<Scalars['Int']>;
  /** Batch details */
  batch?: Maybe<Batch>;
};

/** Batch issue response */
export type IsuueBatch = IssueBatchStatus | BatchCheckMessage | BatchCheckList;

export type IssueBatchStatus = {
  __typename?: 'IssueBatchStatus';
  /** Batch issue status */
  batch_issue?: Maybe<Scalars['String']>;
};

/** Response for Posting Transactions to a Batch */
export type PostTransactionsResponse = PostTransactionsResponsWithoutErrors | PostTransactionsResponsWithErrors;

/** Response for Posting Transactions to a Batch */
export type PostTransactionsResponsWithoutErrors = {
  __typename?: 'PostTransactionsResponsWithoutErrors';
  /** Final Status */
  status?: Maybe<Scalars['String']>;
  /** Batch Issue Status */
  batch_issue?: Maybe<Scalars['String']>;
  /** Batch Check Status */
  batch_check?: Maybe<Scalars['String']>;
  /** Batch identifier (on cases new batch was created) */
  newbatch?: Maybe<Scalars['Int']>;
  /** Batch identifier (on cases added to existing batch) */
  batchno?: Maybe<Scalars['Int']>;
  /** Batch identifier */
  batchId?: Maybe<Scalars['Int']>;
  /** Batch Details */
  batch?: Maybe<Batch>;
  /** errors list */
  errors?: Maybe<Scalars['String']>;
};

/** Response for Posting Transactions to a Batch */
export type PostTransactionsResponsWithErrors = {
  __typename?: 'PostTransactionsResponsWithErrors';
  /** Final Status */
  status?: Maybe<Scalars['String']>;
  /** Batch Issue Status */
  batch_issue?: Maybe<Scalars['String']>;
  /** Batch Check Status */
  batch_check?: Maybe<Scalars['String']>;
  /** Batch identifier (on cases new batch was created) */
  newbatch?: Maybe<Scalars['Int']>;
  /** Batch identifier (on cases added to existing batch) */
  batchno?: Maybe<Scalars['Int']>;
  /** Batch identifier */
  batchId?: Maybe<Scalars['Int']>;
  /** Batch Details */
  batch?: Maybe<Batch>;
  /** errors list */
  errors?: Maybe<Array<Maybe<ARecordErrorDetails>>>;
};

/** Interface for posting new Transaction */
export type PostTransaction = {
  /** VAT registration number (max 9 characters) */
  authorizedDealerNumber?: Maybe<Scalars['String']>;
  /** Branch */
  branch?: Maybe<Scalars['Int']>;
  /** Cost-center code (existing code) */
  costingCode?: Maybe<Scalars['String']>;
  /** Main credit account identifier (max 15 charactes) */
  creditorId?: Maybe<Scalars['String']>;
  /** Name of the main credit account (max 50 characters) */
  creditorName?: Maybe<Scalars['String']>;
  /** Currency (max 5 characters) */
  currencyCode?: Maybe<Scalars['String']>;
  /** Additional date */
  date3?: Maybe<Scalars['String']>;
  /** Main debit account identifier (max 15 charactes) */
  debtorId?: Maybe<Scalars['String']>;
  /** Name of the main debit account (max 50 characters) */
  debtorName?: Maybe<Scalars['String']>;
  /** Description (max 250 characters) */
  description?: Maybe<Scalars['String']>;
  /** Remarks (max 50 characters) */
  details1?: Maybe<Scalars['String']>;
  /** Additional remarks (max 50 characters) */
  details2?: Maybe<Scalars['String']>;
  /** Due date */
  dueDate?: Maybe<Scalars['String']>;
  /** Total amount in foreign currency (credit or debit) */
  foreignCurrencySum?: Maybe<Scalars['Float']>;
  /** Quantity */
  quantity?: Maybe<Scalars['Float']>;
  /** Reference */
  reference1?: Maybe<Scalars['Int']>;
  /** Reference-2 */
  reference2?: Maybe<Scalars['Int']>;
  /** Referenc-3 */
  reference3?: Maybe<Scalars['Int']>;
  /** Total NIS amount (credit or debit) */
  shekelSum: Scalars['Float'];
  /** Transaction type code */
  type?: Maybe<Scalars['String']>;
  /** Date */
  valueDate?: Maybe<Scalars['String']>;
  /** List of Records to add. */
  records?: Maybe<Array<Maybe<PostRecord>>>;
};

/** Interface for posting new Record */
export type PostRecord = {
  /** Account identifier (max 15 characters) */
  accountId: Scalars['String'];
  /** Credit / Debit */
  debitOrCreditNumber: DebitOrCreditNumber;
  /** Foreign currency amount */
  foreignCurrencySum?: Maybe<Scalars['Float']>;
  /** NIS amount */
  shekelSum: Scalars['Float'];
};

export type PostBankPageResponse = {
  __typename?: 'PostBankPageResponse';
  /** Post proccess status */
  status?: Maybe<Scalars['String']>;
  /** Errors list */
  errors?: Maybe<Array<Maybe<BankError>>>;
};

export type BankError = {
  __typename?: 'BankError';
  /** Index */
  index?: Maybe<Scalars['Int']>;
  /** Error description */
  err?: Maybe<Scalars['String']>;
};

/** Interface for posting new Bank Page Record */
export type PostBankPageRecord = {
  /** Account identifier (max 15 character) */
  AccountKey: Scalars['String'];
  /** Reference */
  Reference?: Maybe<Scalars['Int']>;
  /** Credit / Debit */
  CreditDebit: DebitOrCreditNumber;
  /** Amount */
  SuF: Scalars['Int'];
  /** Remarks (max 50 characters) */
  Details?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Record: ResolverTypeWrapper<Record>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Account: ResolverTypeWrapper<Account>;
  Batch: ResolverTypeWrapper<Batch>;
  Transaction: ResolverTypeWrapper<Transaction>;
  debitOrCreditNumber: DebitOrCreditNumber;
  BankPageRecord: ResolverTypeWrapper<BankPageRecord>;
  BankPage: ResolverTypeWrapper<BankPage>;
  Company: ResolverTypeWrapper<Company>;
  HashavshevetUser: ResolverTypeWrapper<HashavshevetUser>;
  BatchErrorReport: ResolversTypes['BatchCheckMessage'] | ResolversTypes['BatchCheckList'];
  BatchCheckMessage: ResolverTypeWrapper<BatchCheckMessage>;
  BatchCheckList: ResolverTypeWrapper<BatchCheckList>;
  ARecordErrorDetails: ResolverTypeWrapper<ARecordErrorDetails>;
  Mutation: ResolverTypeWrapper<{}>;
  NewBatch: ResolverTypeWrapper<NewBatch>;
  IsuueBatch: ResolversTypes['IssueBatchStatus'] | ResolversTypes['BatchCheckMessage'] | ResolversTypes['BatchCheckList'];
  IssueBatchStatus: ResolverTypeWrapper<IssueBatchStatus>;
  PostTransactionsResponse: ResolversTypes['PostTransactionsResponsWithoutErrors'] | ResolversTypes['PostTransactionsResponsWithErrors'];
  PostTransactionsResponsWithoutErrors: ResolverTypeWrapper<PostTransactionsResponsWithoutErrors>;
  PostTransactionsResponsWithErrors: ResolverTypeWrapper<PostTransactionsResponsWithErrors>;
  PostTransaction: PostTransaction;
  PostRecord: PostRecord;
  PostBankPageResponse: ResolverTypeWrapper<PostBankPageResponse>;
  BankError: ResolverTypeWrapper<BankError>;
  PostBankPageRecord: PostBankPageRecord;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Query: {};
  Int: Scalars['Int'];
  Record: Record;
  Float: Scalars['Float'];
  Account: Account;
  Batch: Batch;
  Transaction: Transaction;
  debitOrCreditNumber: DebitOrCreditNumber;
  BankPageRecord: BankPageRecord;
  BankPage: BankPage;
  Company: Company;
  HashavshevetUser: HashavshevetUser;
  BatchErrorReport: ResolversParentTypes['BatchCheckMessage'] | ResolversParentTypes['BatchCheckList'];
  BatchCheckMessage: BatchCheckMessage;
  BatchCheckList: BatchCheckList;
  ARecordErrorDetails: ARecordErrorDetails;
  Mutation: {};
  NewBatch: NewBatch;
  IsuueBatch: ResolversParentTypes['IssueBatchStatus'] | ResolversParentTypes['BatchCheckMessage'] | ResolversParentTypes['BatchCheckList'];
  IssueBatchStatus: IssueBatchStatus;
  PostTransactionsResponse: ResolversParentTypes['PostTransactionsResponsWithoutErrors'] | ResolversParentTypes['PostTransactionsResponsWithErrors'];
  PostTransactionsResponsWithoutErrors: PostTransactionsResponsWithoutErrors;
  PostTransactionsResponsWithErrors: PostTransactionsResponsWithErrors;
  PostTransaction: PostTransaction;
  PostRecord: PostRecord;
  PostBankPageResponse: PostBankPageResponse;
  BankError: BankError;
  PostBankPageRecord: PostBankPageRecord;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getRecordById?: Resolver<Maybe<ResolversTypes['Record']>, ParentType, ContextType, RequireFields<QueryGetRecordByIdArgs, 'id'>>;
  getRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['Record']>>>, ParentType, ContextType>;
  getTransactionById?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QueryGetTransactionByIdArgs, 'id'>>;
  getTransactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Transaction']>>>, ParentType, ContextType>;
  getBatchById?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType, RequireFields<QueryGetBatchByIdArgs, 'id'>>;
  getBatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['Batch']>>>, ParentType, ContextType>;
  getAccountById?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryGetAccountByIdArgs, 'id'>>;
  getAccounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType>;
  getBankPageRecordById?: Resolver<Maybe<ResolversTypes['BankPageRecord']>, ParentType, ContextType, RequireFields<QueryGetBankPageRecordByIdArgs, 'id'>>;
  getBankPageRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['BankPageRecord']>>>, ParentType, ContextType>;
  getBankPageById?: Resolver<Maybe<ResolversTypes['BankPage']>, ParentType, ContextType, RequireFields<QueryGetBankPageByIdArgs, 'id'>>;
  getBankPages?: Resolver<Maybe<Array<Maybe<ResolversTypes['BankPage']>>>, ParentType, ContextType>;
  getUserCompanies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Company']>>>, ParentType, ContextType>;
  getUserDetails?: Resolver<Maybe<ResolversTypes['HashavshevetUser']>, ParentType, ContextType>;
  checkBatch?: Resolver<Maybe<ResolversTypes['BatchErrorReport']>, ParentType, ContextType, RequireFields<QueryCheckBatchArgs, 'id'>>;
};

export type RecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['Record'] = ResolversParentTypes['Record']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  batch?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType>;
  batchId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  counterAccount?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  counterAccountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  counterAccountName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cumulativeBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulativeBalanceBySortKey?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulativeBalanceOfOpenSumInRecord?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulativeBalanceWithoutOpeningBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  debitOrCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  debitOrCreditNumber?: Resolver<Maybe<ResolversTypes['debitOrCreditNumber']>, ParentType, ContextType>;
  estimatedSum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencyCredit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencyCumulativeBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencyCumulativeBalanceWithoutOpeningBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencyDebit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencySum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencySumClosedInRecord?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencySunOpenInRecord?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchNumberCardAnalysis?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shekelCredit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekelCumulativeBalanceByFilter?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekelDebit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekelSum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekelSumClosedInRecord?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekelSumOpenInRecord?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType>;
  transactionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sortGroup?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  filter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  initDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cellphone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  balanceCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  generalDiscountPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vatExempt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occupation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  withholdingPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  withholdingValidity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bankId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bankBranchId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bankAccountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorizedDealerNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainAccount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxCredit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxCreditCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxObligo?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxObligoCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  incomeFileNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  centralAccount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountantTransfer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costingCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type BatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Batch'] = ResolversParentTypes['Batch']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issueDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  initTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  initDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Transaction']>>>, ParentType, ContextType>;
  records?: Resolver<Maybe<Array<Maybe<ResolversTypes['Record']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type TransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = {
  authorizedDealerNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batch?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType>;
  batchId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  branch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  branchName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chequeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  costingCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costingCodeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costingCodeFilter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creditor?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  creditorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  debtor?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  debtorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exchangeRateDifferences?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foreignCurrencySum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  inventoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  linkedFile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  records?: Resolver<Maybe<Array<Maybe<ResolversTypes['Record']>>>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reference3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  registerNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shekelSum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stornoCancelledTransactionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valueDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type BankPageRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['BankPageRecord'] = ResolversParentTypes['BankPageRecord']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  adjustedRecord?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bankPage?: Resolver<Maybe<ResolversTypes['BankPage']>, ParentType, ContextType>;
  bankPageId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cumulativeBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulativeBalanceCalculated?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  debitOrCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type BankPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['BankPage'] = ResolversParentTypes['BankPage']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bankPageRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['BankPageRecord']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type CompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  Company_File_Name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Company_Name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Comp_Vatnum?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type HashavshevetUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['HashavshevetUser'] = ResolversParentTypes['HashavshevetUser']> = {
  cid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  use_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wizcomp_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  company_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  branch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type BatchErrorReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchErrorReport'] = ResolversParentTypes['BatchErrorReport']> = {
  __resolveType: TypeResolveFn<'BatchCheckMessage' | 'BatchCheckList', ParentType, ContextType>;
};

export type BatchCheckMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchCheckMessage'] = ResolversParentTypes['BatchCheckMessage']> = {
  batch_check?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type BatchCheckListResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchCheckList'] = ResolversParentTypes['BatchCheckList']> = {
  batch_check?: Resolver<Maybe<Array<Maybe<ResolversTypes['ARecordErrorDetails']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type ARecordErrorDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ARecordErrorDetails'] = ResolversParentTypes['ARecordErrorDetails']> = {
  headerID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  err?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  TxtMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transaction?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType>;
  record?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  newBatch?: Resolver<Maybe<ResolversTypes['NewBatch']>, ParentType, ContextType>;
  issueBatch?: Resolver<Maybe<ResolversTypes['IsuueBatch']>, ParentType, ContextType, RequireFields<MutationIssueBatchArgs, never>>;
  postTransactionsToBatch?: Resolver<Maybe<ResolversTypes['PostTransactionsResponse']>, ParentType, ContextType, RequireFields<MutationPostTransactionsToBatchArgs, never>>;
  postBankPage?: Resolver<Maybe<ResolversTypes['PostBankPageResponse']>, ParentType, ContextType, RequireFields<MutationPostBankPageArgs, never>>;
};

export type NewBatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['NewBatch'] = ResolversParentTypes['NewBatch']> = {
  newbatch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  batch?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type IsuueBatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['IsuueBatch'] = ResolversParentTypes['IsuueBatch']> = {
  __resolveType: TypeResolveFn<'IssueBatchStatus' | 'BatchCheckMessage' | 'BatchCheckList', ParentType, ContextType>;
};

export type IssueBatchStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['IssueBatchStatus'] = ResolversParentTypes['IssueBatchStatus']> = {
  batch_issue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type PostTransactionsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostTransactionsResponse'] = ResolversParentTypes['PostTransactionsResponse']> = {
  __resolveType: TypeResolveFn<'PostTransactionsResponsWithoutErrors' | 'PostTransactionsResponsWithErrors', ParentType, ContextType>;
};

export type PostTransactionsResponsWithoutErrorsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostTransactionsResponsWithoutErrors'] = ResolversParentTypes['PostTransactionsResponsWithoutErrors']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batch_issue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batch_check?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newbatch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  batchno?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  batchId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  batch?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type PostTransactionsResponsWithErrorsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostTransactionsResponsWithErrors'] = ResolversParentTypes['PostTransactionsResponsWithErrors']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batch_issue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batch_check?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newbatch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  batchno?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  batchId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  batch?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['ARecordErrorDetails']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type PostBankPageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostBankPageResponse'] = ResolversParentTypes['PostBankPageResponse']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['BankError']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type BankErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['BankError'] = ResolversParentTypes['BankError']> = {
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  err?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Record?: RecordResolvers<ContextType>;
  Account?: AccountResolvers<ContextType>;
  Batch?: BatchResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  BankPageRecord?: BankPageRecordResolvers<ContextType>;
  BankPage?: BankPageResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  HashavshevetUser?: HashavshevetUserResolvers<ContextType>;
  BatchErrorReport?: BatchErrorReportResolvers;
  BatchCheckMessage?: BatchCheckMessageResolvers<ContextType>;
  BatchCheckList?: BatchCheckListResolvers<ContextType>;
  ARecordErrorDetails?: ARecordErrorDetailsResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NewBatch?: NewBatchResolvers<ContextType>;
  IsuueBatch?: IsuueBatchResolvers;
  IssueBatchStatus?: IssueBatchStatusResolvers<ContextType>;
  PostTransactionsResponse?: PostTransactionsResponseResolvers;
  PostTransactionsResponsWithoutErrors?: PostTransactionsResponsWithoutErrorsResolvers<ContextType>;
  PostTransactionsResponsWithErrors?: PostTransactionsResponsWithErrorsResolvers<ContextType>;
  PostBankPageResponse?: PostBankPageResponseResolvers<ContextType>;
  BankError?: BankErrorResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

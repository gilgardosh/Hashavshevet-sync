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
  recordById?: Maybe<Record>;
  /** List of All Records */
  records?: Maybe<Array<Maybe<Record>>>;
  /** A Single Transaction by its ID */
  transactionById?: Maybe<Transaction>;
  /** List of All Transactions */
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  /** A Single Batch by its ID */
  batchById?: Maybe<Batch>;
  /** List of All Batches */
  batches?: Maybe<Array<Maybe<Batch>>>;
  /** A Single Account by its ID */
  accountById?: Maybe<Account>;
  /** List of All Accounts */
  accounts?: Maybe<Array<Maybe<Account>>>;
  /** A Single Bank Page Record by its ID */
  bankPageRecordById?: Maybe<BankPageRecord>;
  /** List of All Bank Page Records */
  bankPageRecords?: Maybe<Array<Maybe<BankPageRecord>>>;
  /** A Single Bank Page (Which Is A List Of Bank Page Records), by its ID */
  bankPageById?: Maybe<BankPage>;
  /** List Of Bank Pages */
  bankPages?: Maybe<Array<Maybe<BankPage>>>;
  /** List of Companies for user token thats defined on: 'WizcloudApiPrivateKey' */
  userCompanies?: Maybe<Array<Maybe<Company>>>;
  /** Get User Details */
  userDetails?: Maybe<HashavshevetUser>;
  /** Checks if there are errors in the batch */
  checkBatch?: Maybe<BatchErrorReport>;
};


export type QueryRecordByIdArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryTransactionByIdArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryBatchByIdArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryAccountByIdArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryBankPageRecordByIdArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryBankPageByIdArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryCheckBatchArgs = {
  batchId?: Maybe<Scalars['Int']>;
};

/** A Single Record */
export type Record = {
  __typename?: 'Record';
  debitOrCredit: Scalars['String'];
  counterAccountId?: Maybe<Scalars['String']>;
  matchNumberCardAnalysis?: Maybe<Scalars['Int']>;
  debitOrCreditNumber: Scalars['Int'];
  id: Scalars['Int'];
  accountId: Scalars['String'];
  counterAccountName?: Maybe<Scalars['String']>;
  shekelCredit?: Maybe<Scalars['Float']>;
  shekelDebit?: Maybe<Scalars['Float']>;
  shekelSum?: Maybe<Scalars['Float']>;
  shekelSumClosedInRecord?: Maybe<Scalars['Float']>;
  shekelSumOpenInRecord?: Maybe<Scalars['Float']>;
  cumulativeBalance?: Maybe<Scalars['Float']>;
  foreignCurrencyCumulativeBalanceWithoutOpeningBalance?: Maybe<Scalars['Float']>;
  cumulativeBalanceWithoutOpeningBalance?: Maybe<Scalars['Float']>;
  shekelCumulativeBalanceBySector?: Maybe<Scalars['Float']>;
  cumulativeBalanceBySortKey?: Maybe<Scalars['Float']>;
  cumulativeBalanceOfOpenSumInRecord?: Maybe<Scalars['Float']>;
  foreignCurrencyCredit?: Maybe<Scalars['Float']>;
  foreignCurrencyDebit?: Maybe<Scalars['Float']>;
  foreignCurrencyCumulativeBalance?: Maybe<Scalars['Float']>;
  foreignCurrencySum?: Maybe<Scalars['Float']>;
  foreignCurrencySumClosedInRecord?: Maybe<Scalars['Float']>;
  foreignCurrencySunOpenInRecord?: Maybe<Scalars['Float']>;
  estimatedSum?: Maybe<Scalars['Float']>;
  transactionId: Scalars['Int'];
  batchId: Scalars['Int'];
  transaction?: Maybe<Transaction>;
  batch?: Maybe<Batch>;
  account?: Maybe<Account>;
  counterAccount?: Maybe<Account>;
};

/** A Transaction of Some Records */
export type Transaction = {
  __typename?: 'Transaction';
  debtorId?: Maybe<Scalars['String']>;
  creditorId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  foreignCurrencySum?: Maybe<Scalars['Float']>;
  shekelSum?: Maybe<Scalars['Float']>;
  reference1?: Maybe<Scalars['Int']>;
  reference2?: Maybe<Scalars['Int']>;
  reference3?: Maybe<Scalars['Int']>;
  valueDate?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['String']>;
  details1?: Maybe<Scalars['String']>;
  details2?: Maybe<Scalars['String']>;
  exchangeRateDifferences?: Maybe<Scalars['String']>;
  costingCodeSector?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  inventoryId?: Maybe<Scalars['Int']>;
  chequeId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  batchId: Scalars['Int'];
  authorizedDealerNumber?: Maybe<Scalars['String']>;
  registerNumber?: Maybe<Scalars['Int']>;
  stornoCancelledTransactionId?: Maybe<Scalars['Int']>;
  branch?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  linkedFile?: Maybe<Scalars['String']>;
  costingCode?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  branchName?: Maybe<Scalars['String']>;
  costingCodeName?: Maybe<Scalars['String']>;
  batch?: Maybe<Batch>;
  debtor?: Maybe<Account>;
  creditor?: Maybe<Account>;
  records?: Maybe<Array<Maybe<Record>>>;
};

/** A Single Batch */
export type Batch = {
  __typename?: 'Batch';
  id: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  issueDate?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  initTime?: Maybe<Scalars['String']>;
  initDate?: Maybe<Scalars['String']>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  records?: Maybe<Array<Maybe<Record>>>;
};

/** A Single Account */
export type Account = {
  __typename?: 'Account';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  sortGroup?: Maybe<Scalars['Int']>;
  sector?: Maybe<Scalars['String']>;
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

/** A Single Bank Page Record */
export type BankPageRecord = {
  __typename?: 'BankPageRecord';
  id: Scalars['Int'];
  bankPageId: Scalars['Int'];
  reference?: Maybe<Scalars['Int']>;
  debitOrCredit: Scalars['String'];
  cumulativeBalance?: Maybe<Scalars['Float']>;
  cumulativeBalanceCalculated?: Maybe<Scalars['Float']>;
  matchNumber?: Maybe<Scalars['Int']>;
  accountId?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['Float']>;
  details?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  adjustedRecord?: Maybe<Scalars['String']>;
  bankPage?: Maybe<BankPage>;
  account?: Maybe<Account>;
};

/** A Single BA Single Bank Page (Which Is A List Of Bank Page Records)atch */
export type BankPage = {
  __typename?: 'BankPage';
  id: Scalars['Int'];
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
  batch_check?: Maybe<Scalars['String']>;
};

export type BatchCheckList = {
  __typename?: 'BatchCheckList';
  batch_check?: Maybe<Array<Maybe<ARecordErrorDetails>>>;
};

export type ARecordErrorDetails = {
  __typename?: 'ARecordErrorDetails';
  /** AKA transactionId */
  headerID?: Maybe<Scalars['String']>;
  err?: Maybe<Scalars['Int']>;
  /** AKA recordId */
  recId?: Maybe<Scalars['Int']>;
  field?: Maybe<Scalars['String']>;
  TxtMsg?: Maybe<Scalars['String']>;
  transaction?: Maybe<Batch>;
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
  batchId?: Maybe<Scalars['Int']>;
};


/** Root Mutation */
export type MutationPostTransactionsToBatchArgs = {
  batchId?: Maybe<Scalars['Int']>;
  insertToLastBatch?: Maybe<Scalars['Boolean']>;
  checkBatch?: Maybe<Scalars['Boolean']>;
  issueBatch?: Maybe<Scalars['Boolean']>;
  transactionsList?: Maybe<Array<Maybe<PostTransaction>>>;
};


/** Root Mutation */
export type MutationPostBankPageArgs = {
  bankPageRecords?: Maybe<Array<Maybe<PostBankPageRecord>>>;
};

export type NewBatch = {
  __typename?: 'NewBatch';
  newbatch?: Maybe<Scalars['Int']>;
  batch?: Maybe<Batch>;
};

export type IsuueBatch = IssueBatchStatus | BatchCheckMessage | BatchCheckList;

export type IssueBatchStatus = {
  __typename?: 'IssueBatchStatus';
  batch_issue?: Maybe<Scalars['String']>;
};

/** Response for Posting Transactions to a Batch */
export type PostTransactionsResponse = PostTransactionsResponsWithoutErrors | PostTransactionsResponsWithErrors;

/** Response for Posting Transactions to a Batch */
export type PostTransactionsResponsWithoutErrors = {
  __typename?: 'PostTransactionsResponsWithoutErrors';
  status?: Maybe<Scalars['String']>;
  batch_issue?: Maybe<Scalars['String']>;
  batch_check?: Maybe<Scalars['String']>;
  newbatch?: Maybe<Scalars['Int']>;
  batchno?: Maybe<Scalars['Int']>;
  batch_id?: Maybe<Scalars['Int']>;
  errors?: Maybe<Scalars['String']>;
  batch?: Maybe<Batch>;
};

/** Response for Posting Transactions to a Batch */
export type PostTransactionsResponsWithErrors = {
  __typename?: 'PostTransactionsResponsWithErrors';
  status?: Maybe<Scalars['String']>;
  batch_issue?: Maybe<Scalars['String']>;
  batch_check?: Maybe<Scalars['String']>;
  newbatch?: Maybe<Scalars['Int']>;
  batchno?: Maybe<Scalars['Int']>;
  batch_id?: Maybe<Scalars['Int']>;
  errors?: Maybe<Array<Maybe<ARecordErrorDetails>>>;
  batch?: Maybe<Batch>;
};

/** Interface for posting new Transaction */
export type PostTransaction = {
  branch?: Maybe<Scalars['Int']>;
  costingCode?: Maybe<Scalars['String']>;
  creditorName?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  date3?: Maybe<Scalars['String']>;
  debtorName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  details2?: Maybe<Scalars['String']>;
  details1?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['String']>;
  authorizedDealerNumber?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  reference1?: Maybe<Scalars['Int']>;
  reference2?: Maybe<Scalars['Int']>;
  reference3?: Maybe<Scalars['Int']>;
  shekelSum: Scalars['Float'];
  foreignCurrencySum?: Maybe<Scalars['Float']>;
  creditorId: Scalars['String'];
  debtorId: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  valueDate?: Maybe<Scalars['String']>;
  records?: Maybe<Array<Maybe<PostRecord>>>;
};

/** Interface for posting new Record */
export type PostRecord = {
  accountId: Scalars['String'];
  debit_orCreditNumber: Scalars['String'];
  shekelSum: Scalars['Float'];
  foreignCurrencySum?: Maybe<Scalars['Float']>;
};

export type PostBankPageResponse = {
  __typename?: 'PostBankPageResponse';
  status?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<BankError>>>;
};

export type BankError = {
  __typename?: 'BankError';
  index?: Maybe<Scalars['Int']>;
  err?: Maybe<Scalars['String']>;
};

/** Interface for posting new Bank Page Record */
export type PostBankPageRecord = {
  AccountKey: Scalars['String'];
  Reference?: Maybe<Scalars['Int']>;
  CreditDebit: Scalars['Int'];
  SuF: Scalars['Int'];
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
  Transaction: ResolverTypeWrapper<Transaction>;
  Batch: ResolverTypeWrapper<Batch>;
  Account: ResolverTypeWrapper<Account>;
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
  Transaction: Transaction;
  Batch: Batch;
  Account: Account;
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
  recordById?: Resolver<Maybe<ResolversTypes['Record']>, ParentType, ContextType, RequireFields<QueryRecordByIdArgs, never>>;
  records?: Resolver<Maybe<Array<Maybe<ResolversTypes['Record']>>>, ParentType, ContextType>;
  transactionById?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QueryTransactionByIdArgs, never>>;
  transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Transaction']>>>, ParentType, ContextType>;
  batchById?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType, RequireFields<QueryBatchByIdArgs, never>>;
  batches?: Resolver<Maybe<Array<Maybe<ResolversTypes['Batch']>>>, ParentType, ContextType>;
  accountById?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountByIdArgs, never>>;
  accounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType>;
  bankPageRecordById?: Resolver<Maybe<ResolversTypes['BankPageRecord']>, ParentType, ContextType, RequireFields<QueryBankPageRecordByIdArgs, never>>;
  bankPageRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['BankPageRecord']>>>, ParentType, ContextType>;
  bankPageById?: Resolver<Maybe<ResolversTypes['BankPage']>, ParentType, ContextType, RequireFields<QueryBankPageByIdArgs, never>>;
  bankPages?: Resolver<Maybe<Array<Maybe<ResolversTypes['BankPage']>>>, ParentType, ContextType>;
  userCompanies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Company']>>>, ParentType, ContextType>;
  userDetails?: Resolver<Maybe<ResolversTypes['HashavshevetUser']>, ParentType, ContextType>;
  checkBatch?: Resolver<Maybe<ResolversTypes['BatchErrorReport']>, ParentType, ContextType, RequireFields<QueryCheckBatchArgs, never>>;
};

export type RecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['Record'] = ResolversParentTypes['Record']> = {
  debitOrCredit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  counterAccountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  matchNumberCardAnalysis?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  debitOrCreditNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  counterAccountName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shekelCredit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekelDebit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekelSum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekelSumClosedInRecord?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekelSumOpenInRecord?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulativeBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencyCumulativeBalanceWithoutOpeningBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulativeBalanceWithoutOpeningBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekelCumulativeBalanceBySector?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulativeBalanceBySortKey?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulativeBalanceOfOpenSumInRecord?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencyCredit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencyDebit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencyCumulativeBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencySum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencySumClosedInRecord?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencySunOpenInRecord?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  estimatedSum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transactionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  batchId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType>;
  batch?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  counterAccount?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type TransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = {
  debtorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creditorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foreignCurrencySum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekelSum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reference3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  valueDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exchangeRateDifferences?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costingCodeSector?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  inventoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  chequeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  batchId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  authorizedDealerNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registerNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stornoCancelledTransactionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  branch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedFile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costingCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  branchName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costingCodeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batch?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType>;
  debtor?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  creditor?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  records?: Resolver<Maybe<Array<Maybe<ResolversTypes['Record']>>>, ParentType, ContextType>;
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

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sortGroup?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sector?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type BankPageRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['BankPageRecord'] = ResolversParentTypes['BankPageRecord']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bankPageId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  debitOrCredit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cumulativeBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulativeBalanceCalculated?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  matchNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  adjustedRecord?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bankPage?: Resolver<Maybe<ResolversTypes['BankPage']>, ParentType, ContextType>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
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
  batch_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batch?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type PostTransactionsResponsWithErrorsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostTransactionsResponsWithErrors'] = ResolversParentTypes['PostTransactionsResponsWithErrors']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batch_issue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batch_check?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newbatch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  batchno?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  batch_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['ARecordErrorDetails']>>>, ParentType, ContextType>;
  batch?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType>;
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
  Transaction?: TransactionResolvers<ContextType>;
  Batch?: BatchResolvers<ContextType>;
  Account?: AccountResolvers<ContextType>;
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

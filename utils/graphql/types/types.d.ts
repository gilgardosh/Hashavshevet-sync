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
  batch_id?: Maybe<Scalars['Int']>;
};

/** A Single Record */
export type Record = {
  __typename?: 'Record';
  debit_or_credit: Scalars['String'];
  counter_account_id?: Maybe<Scalars['String']>;
  match_number_card_analysis?: Maybe<Scalars['Int']>;
  debit_or_credit_number: Scalars['Int'];
  id: Scalars['Int'];
  account_id: Scalars['String'];
  counter_account_name?: Maybe<Scalars['String']>;
  shekel_credit?: Maybe<Scalars['Float']>;
  shekel_debit?: Maybe<Scalars['Float']>;
  shekel_sum?: Maybe<Scalars['Float']>;
  shekel_sum_closed_in_record?: Maybe<Scalars['Float']>;
  shekel_sum_open_in_record?: Maybe<Scalars['Float']>;
  cumulative_balance?: Maybe<Scalars['Float']>;
  foreign_currency_cumulative_balance_without_opening_balance?: Maybe<Scalars['Float']>;
  cumulative_balance_without_opening_balance?: Maybe<Scalars['Float']>;
  shekel_cumulative_balance_by_sector?: Maybe<Scalars['Float']>;
  cumulative_balance_by_sort_key?: Maybe<Scalars['Float']>;
  cumulative_balance_of_open_sum_in_record?: Maybe<Scalars['Float']>;
  foreign_currency_credit?: Maybe<Scalars['Float']>;
  foreign_currency_debit?: Maybe<Scalars['Float']>;
  foreign_currency_cumulative_balance?: Maybe<Scalars['Float']>;
  foreign_currency_sum?: Maybe<Scalars['Float']>;
  foreign_currency_sum_closed_in_record?: Maybe<Scalars['Float']>;
  foreign_currency_sun_open_in_record?: Maybe<Scalars['Float']>;
  estimated_sum?: Maybe<Scalars['Float']>;
  transaction_id: Scalars['Int'];
  batch_id: Scalars['Int'];
  transaction?: Maybe<Transaction>;
  batch?: Maybe<Batch>;
  account?: Maybe<Account>;
  counter_account?: Maybe<Account>;
};

/** A Transaction of Some Records */
export type Transaction = {
  __typename?: 'Transaction';
  debtor_id?: Maybe<Scalars['String']>;
  creditor_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  currency_code?: Maybe<Scalars['String']>;
  foreign_currency_sum?: Maybe<Scalars['Float']>;
  shekel_sum?: Maybe<Scalars['Float']>;
  reference1?: Maybe<Scalars['Int']>;
  reference2?: Maybe<Scalars['Int']>;
  reference3?: Maybe<Scalars['Int']>;
  value_date?: Maybe<Scalars['String']>;
  due_date?: Maybe<Scalars['String']>;
  details1?: Maybe<Scalars['String']>;
  details2?: Maybe<Scalars['String']>;
  exchange_rate_differences?: Maybe<Scalars['String']>;
  costing_code_sector?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  inventory_id?: Maybe<Scalars['Int']>;
  cheque_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  batch_id: Scalars['Int'];
  authorized_dealer_number?: Maybe<Scalars['String']>;
  register_number?: Maybe<Scalars['Int']>;
  storno_cancelled_transaction_id?: Maybe<Scalars['Int']>;
  branch?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  linked_file?: Maybe<Scalars['String']>;
  costing_code?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  branch_name?: Maybe<Scalars['String']>;
  costing_code_name?: Maybe<Scalars['String']>;
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
  issue_date?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  init_time?: Maybe<Scalars['String']>;
  init_date?: Maybe<Scalars['String']>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  records?: Maybe<Array<Maybe<Record>>>;
};

/** A Single Account */
export type Account = {
  __typename?: 'Account';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  sort_group?: Maybe<Scalars['Int']>;
  sector?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  init_date?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  cellphone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  balance_code?: Maybe<Scalars['String']>;
  general_discount_percent?: Maybe<Scalars['Float']>;
  vat_exempt?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  agent?: Maybe<Scalars['Int']>;
  withholding_percent?: Maybe<Scalars['Float']>;
  withholding_validity?: Maybe<Scalars['String']>;
  bank_id?: Maybe<Scalars['String']>;
  bank_branch_id?: Maybe<Scalars['String']>;
  bank_account_id?: Maybe<Scalars['String']>;
  authorized_dealer_number?: Maybe<Scalars['String']>;
  main_account?: Maybe<Scalars['String']>;
  max_credit?: Maybe<Scalars['Float']>;
  max_credit_currency?: Maybe<Scalars['String']>;
  max_obligo?: Maybe<Scalars['Float']>;
  max_obligo_currency?: Maybe<Scalars['String']>;
  income_file_number?: Maybe<Scalars['String']>;
  central_account?: Maybe<Scalars['String']>;
  accountant_transfer?: Maybe<Scalars['String']>;
  costing_code?: Maybe<Scalars['String']>;
};

/** A Single Bank Page Record */
export type BankPageRecord = {
  __typename?: 'BankPageRecord';
  id: Scalars['Int'];
  bank_page_id: Scalars['Int'];
  reference?: Maybe<Scalars['Int']>;
  debit_or_credit: Scalars['String'];
  cumulative_balance?: Maybe<Scalars['Float']>;
  cumulative_balance_calculated?: Maybe<Scalars['Float']>;
  match_number?: Maybe<Scalars['Int']>;
  account_id?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['Float']>;
  details?: Maybe<Scalars['String']>;
  account_name?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  adjusted_record?: Maybe<Scalars['String']>;
  bank_page?: Maybe<BankPage>;
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
  /** AKA transaction_id */
  headerID?: Maybe<Scalars['String']>;
  err?: Maybe<Scalars['Int']>;
  /** AKA record_id */
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
  addTransactionsToBatch?: Maybe<AddTransactionsResponse>;
  /** Import  or update records to chosen index */
  addBankPage?: Maybe<AddBankPageResponse>;
};


/** Root Mutation */
export type MutationIssueBatchArgs = {
  batch_id?: Maybe<Scalars['Int']>;
};


/** Root Mutation */
export type MutationAddTransactionsToBatchArgs = {
  batch_id?: Maybe<Scalars['Int']>;
  insert_to_last_batch?: Maybe<Scalars['Boolean']>;
  check_batch?: Maybe<Scalars['Boolean']>;
  issue_batch?: Maybe<Scalars['Boolean']>;
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

/** Response for Adding Transactions to a Batch */
export type AddTransactionsResponse = AddTransactionsResponsWithoutErrors | AddTransactionsResponsWithErrors;

/** Response for Adding Transactions to a Batch */
export type AddTransactionsResponsWithoutErrors = {
  __typename?: 'AddTransactionsResponsWithoutErrors';
  status?: Maybe<Scalars['String']>;
  batch_issue?: Maybe<Scalars['String']>;
  batch_check?: Maybe<Scalars['String']>;
  newbatch?: Maybe<Scalars['Int']>;
  batchno?: Maybe<Scalars['Int']>;
  batch_id?: Maybe<Scalars['Int']>;
  errors?: Maybe<Scalars['String']>;
  batch?: Maybe<Batch>;
};

/** Response for Adding Transactions to a Batch */
export type AddTransactionsResponsWithErrors = {
  __typename?: 'AddTransactionsResponsWithErrors';
  status?: Maybe<Scalars['String']>;
  batch_issue?: Maybe<Scalars['String']>;
  batch_check?: Maybe<Scalars['String']>;
  newbatch?: Maybe<Scalars['Int']>;
  batchno?: Maybe<Scalars['Int']>;
  batch_id?: Maybe<Scalars['Int']>;
  errors?: Maybe<Array<Maybe<ARecordErrorDetails>>>;
  batch?: Maybe<Batch>;
};

export type AddBankPageResponse = {
  __typename?: 'AddBankPageResponse';
  status?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<BankError>>>;
};

export type BankError = {
  __typename?: 'BankError';
  index?: Maybe<Scalars['Int']>;
  err?: Maybe<Scalars['String']>;
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
  AddTransactionsResponse: ResolversTypes['AddTransactionsResponsWithoutErrors'] | ResolversTypes['AddTransactionsResponsWithErrors'];
  AddTransactionsResponsWithoutErrors: ResolverTypeWrapper<AddTransactionsResponsWithoutErrors>;
  AddTransactionsResponsWithErrors: ResolverTypeWrapper<AddTransactionsResponsWithErrors>;
  AddBankPageResponse: ResolverTypeWrapper<AddBankPageResponse>;
  BankError: ResolverTypeWrapper<BankError>;
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
  AddTransactionsResponse: ResolversParentTypes['AddTransactionsResponsWithoutErrors'] | ResolversParentTypes['AddTransactionsResponsWithErrors'];
  AddTransactionsResponsWithoutErrors: AddTransactionsResponsWithoutErrors;
  AddTransactionsResponsWithErrors: AddTransactionsResponsWithErrors;
  AddBankPageResponse: AddBankPageResponse;
  BankError: BankError;
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
  debit_or_credit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  counter_account_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  match_number_card_analysis?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  debit_or_credit_number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  account_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  counter_account_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shekel_credit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekel_debit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekel_sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekel_sum_closed_in_record?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekel_sum_open_in_record?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulative_balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreign_currency_cumulative_balance_without_opening_balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulative_balance_without_opening_balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekel_cumulative_balance_by_sector?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulative_balance_by_sort_key?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulative_balance_of_open_sum_in_record?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreign_currency_credit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreign_currency_debit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreign_currency_cumulative_balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreign_currency_sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreign_currency_sum_closed_in_record?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreign_currency_sun_open_in_record?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  estimated_sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  batch_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType>;
  batch?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  counter_account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type TransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = {
  debtor_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creditor_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foreign_currency_sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekel_sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reference3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  value_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  due_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exchange_rate_differences?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costing_code_sector?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  inventory_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cheque_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  batch_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  authorized_dealer_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  register_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  storno_cancelled_transaction_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  branch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linked_file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costing_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  branch_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costing_code_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  issue_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  init_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  init_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Transaction']>>>, ParentType, ContextType>;
  records?: Resolver<Maybe<Array<Maybe<ResolversTypes['Record']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_group?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sector?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  init_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cellphone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  balance_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  general_discount_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vat_exempt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occupation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  withholding_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  withholding_validity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bank_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bank_branch_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bank_account_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorized_dealer_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  main_account?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  max_credit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  max_credit_currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  max_obligo?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  max_obligo_currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  income_file_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  central_account?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountant_transfer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costing_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type BankPageRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['BankPageRecord'] = ResolversParentTypes['BankPageRecord']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bank_page_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  debit_or_credit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cumulative_balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulative_balance_calculated?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  match_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  account_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  account_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  adjusted_record?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bank_page?: Resolver<Maybe<ResolversTypes['BankPage']>, ParentType, ContextType>;
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
  addTransactionsToBatch?: Resolver<Maybe<ResolversTypes['AddTransactionsResponse']>, ParentType, ContextType, RequireFields<MutationAddTransactionsToBatchArgs, never>>;
  addBankPage?: Resolver<Maybe<ResolversTypes['AddBankPageResponse']>, ParentType, ContextType>;
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

export type AddTransactionsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddTransactionsResponse'] = ResolversParentTypes['AddTransactionsResponse']> = {
  __resolveType: TypeResolveFn<'AddTransactionsResponsWithoutErrors' | 'AddTransactionsResponsWithErrors', ParentType, ContextType>;
};

export type AddTransactionsResponsWithoutErrorsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddTransactionsResponsWithoutErrors'] = ResolversParentTypes['AddTransactionsResponsWithoutErrors']> = {
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

export type AddTransactionsResponsWithErrorsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddTransactionsResponsWithErrors'] = ResolversParentTypes['AddTransactionsResponsWithErrors']> = {
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

export type AddBankPageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddBankPageResponse'] = ResolversParentTypes['AddBankPageResponse']> = {
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
  AddTransactionsResponse?: AddTransactionsResponseResolvers;
  AddTransactionsResponsWithoutErrors?: AddTransactionsResponsWithoutErrorsResolvers<ContextType>;
  AddTransactionsResponsWithErrors?: AddTransactionsResponsWithErrorsResolvers<ContextType>;
  AddBankPageResponse?: AddBankPageResponseResolvers<ContextType>;
  BankError?: BankErrorResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

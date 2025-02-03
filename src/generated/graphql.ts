/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AdminByIdInput = {
  adminId: Scalars['Int']['input'];
};

export type Authorized = {
  __typename?: 'Authorized';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type AuthorizedAdmin = {
  __typename?: 'AuthorizedAdmin';
  admin?: Maybe<Admin>;
  token?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmin: Admin;
  createUser: User;
  signIn: Authorized;
  signInAdmin: AuthorizedAdmin;
  signUp: Authorized;
  signUpAdmin: AuthorizedAdmin;
};


export type MutationCreateAdminArgs = {
  data: NewAdminInput;
};


export type MutationCreateUserArgs = {
  data: NewUserInput;
};


export type MutationSignInArgs = {
  data: SigninInput;
};


export type MutationSignInAdminArgs = {
  data: SigninInput;
};


export type MutationSignUpArgs = {
  data: NewUserInput;
};


export type MutationSignUpAdminArgs = {
  data: NewAdminInput;
};

export type NewAdminInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type NewUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  viewCount?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAdmin: Admin;
  getAdmins: Array<Admin>;
  getUser: User;
  getUsers: Array<User>;
  isAuth: User;
  isAuthAdmin: Admin;
};


export type QueryGetAdminArgs = {
  data: AdminByIdInput;
};


export type QueryGetUserArgs = {
  data: UserByIdInput;
};

export type SigninInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Post>>;
};

export type UserByIdInput = {
  userId: Scalars['Int']['input'];
};

export type SignInMutationVariables = Exact<{
  SignInInput: SigninInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'Authorized', token?: string | null, user?: { __typename?: 'User', id?: number | null, email?: string | null, name?: string | null } | null } };

export type SignInAdminMutationVariables = Exact<{
  SignInAdminInput: SigninInput;
}>;


export type SignInAdminMutation = { __typename?: 'Mutation', signInAdmin: { __typename?: 'AuthorizedAdmin', token?: string | null, admin?: { __typename?: 'Admin', id?: number | null, email?: string | null, name?: string | null } | null } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', id?: number | null, email?: string | null, name?: string | null, posts?: Array<{ __typename?: 'Post', id?: number | null, title?: string | null }> | null }> };


export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"SignInInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SigninInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"SignInInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignInAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignInAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"SignInAdminInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SigninInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"SignInAdminInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<SignInAdminMutation, SignInAdminMutationVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AdminByIdInput = {
  adminId: Scalars['Int']['input'];
};

export type Authorized = {
  __typename?: 'Authorized';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type AuthorizedAdmin = {
  __typename?: 'AuthorizedAdmin';
  admin?: Maybe<Admin>;
  token?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmin: Admin;
  createUser: User;
  signIn: Authorized;
  signInAdmin: AuthorizedAdmin;
  signUp: Authorized;
  signUpAdmin: AuthorizedAdmin;
};


export type MutationCreateAdminArgs = {
  data: NewAdminInput;
};


export type MutationCreateUserArgs = {
  data: NewUserInput;
};


export type MutationSignInArgs = {
  data: SigninInput;
};


export type MutationSignInAdminArgs = {
  data: SigninInput;
};


export type MutationSignUpArgs = {
  data: NewUserInput;
};


export type MutationSignUpAdminArgs = {
  data: NewAdminInput;
};

export type NewAdminInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type NewUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  viewCount?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAdmin: Admin;
  getAdmins: Array<Admin>;
  getUser: User;
  getUsers: Array<User>;
  isAuth: User;
  isAuthAdmin: Admin;
};


export type QueryGetAdminArgs = {
  data: AdminByIdInput;
};


export type QueryGetUserArgs = {
  data: UserByIdInput;
};

export type SigninInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Post>>;
};

export type UserByIdInput = {
  userId: Scalars['Int']['input'];
};

export type SignInMutationVariables = Exact<{
  SignInInput: SigninInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'Authorized', token?: string | null, user?: { __typename?: 'User', id?: number | null, email?: string | null, name?: string | null } | null } };

export type SignInAdminMutationVariables = Exact<{
  SignInAdminInput: SigninInput;
}>;


export type SignInAdminMutation = { __typename?: 'Mutation', signInAdmin: { __typename?: 'AuthorizedAdmin', token?: string | null, admin?: { __typename?: 'Admin', id?: number | null, email?: string | null, name?: string | null } | null } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', id?: number | null, email?: string | null, name?: string | null, posts?: Array<{ __typename?: 'Post', id?: number | null, title?: string | null }> | null }> };

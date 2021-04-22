export const typeDefs = ["type Board {\n  id: Int!\n  name: String!\n  view: Int!\n  text: String!\n  isFav: Boolean!\n  createAt: String!\n  updateAt: String\n  pages: [Page]\n}\n\ntype Comment {\n  id: Int!\n  linkPage: Page!\n  user: User!\n  userId: Int!\n  createAt: String!\n  updateAt: String!\n  text: String!\n}\n\ntype Page {\n  id: Int!\n  name: String!\n  view: Int!\n  text: String!\n  isFav: Boolean!\n  createBy: User!\n  createAt: String!\n  updateAt: String\n  comments: [Comment]\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(firstName: String!, lastName: String!, email: String!, password: String!, profilePhoto: String!, age: Int!): EmailSignUpResponse!\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype User {\n  id: Int!\n  email: String\n  verifiedEmail: Boolean!\n  firstName: String!\n  lastName: String!\n  age: Int\n  password: String\n  profilePhoto: String\n  createAt: String!\n  updateAt: String\n  fullName: String\n  nickName: String\n  page: [Page]\n  comment: [Comment]\n}\n\ntype Query {\n  user: User\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  createAt: String!\n  updateAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  email: string | null;
  verifiedEmail: boolean;
  firstName: string;
  lastName: string;
  age: number | null;
  password: string | null;
  profilePhoto: string | null;
  createAt: string;
  updateAt: string | null;
  fullName: string | null;
  nickName: string | null;
  page: Array<Page> | null;
  comment: Array<Comment> | null;
}

export interface Page {
  id: number;
  name: string;
  view: number;
  text: string;
  isFav: boolean;
  createBy: User;
  createAt: string;
  updateAt: string | null;
  comments: Array<Comment> | null;
}

export interface Comment {
  id: number;
  linkPage: Page;
  user: User;
  userId: number;
  createAt: string;
  updateAt: string;
  text: string;
}

export interface Mutation {
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
}

export interface EmailSignInMutationArgs {
  email: string;
  password: string;
}

export interface EmailSignUpMutationArgs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePhoto: string;
  age: number;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface Board {
  id: number;
  name: string;
  view: number;
  text: string;
  isFav: boolean;
  createAt: string;
  updateAt: string | null;
  pages: Array<Page> | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  used: boolean;
  createAt: string;
  updateAt: string | null;
}

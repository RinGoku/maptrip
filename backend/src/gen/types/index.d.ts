/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as PrismaClient from ".prisma/client"
import { core } from "@nexus/schema"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    date<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: any
}

export interface NexusGenRootTypes {
  Mutation: {};
  Post: PrismaClient.Post;
  Query: {};
  User: PrismaClient.User;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
  Date: NexusGenScalars['Date'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createPost: NexusGenRootTypes['Post'] | null; // Post
    createUser: NexusGenRootTypes['User']; // User!
  }
  Post: { // field return type
    authorId: number | null; // Int
    content: string | null; // String
    createdAt: NexusGenScalars['Date'] | null; // Date
    id: string | null; // ID
    latitude: number | null; // Float
    longitude: number | null; // Float
    published: boolean | null; // Boolean
    title: string | null; // String
  }
  Query: { // field return type
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  User: { // field return type
    email: string | null; // String
    id: string | null; // ID
    name: string | null; // String
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPost: { // args
      authorId: number; // Int!
      content: string; // String!
      latitude: number; // Float!
      longitude: number; // Float!
      published?: boolean | null; // Boolean
      title: string; // String!
    }
    createUser: { // args
      email: string; // String!
      name: string; // String!
    }
  }
  Query: {
    users: { // args
      id: number; // Int!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Post" | "Query" | "User";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Date" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: { prisma: PrismaClient.PrismaClient };
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}
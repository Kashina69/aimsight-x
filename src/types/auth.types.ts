export interface BasicUserType {
user_id?: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface UserSchemaType extends BasicUserType {
  createdAt: Date;
  updatedAt: Date;
}

export interface JWTPayloadType extends BasicUserType {
  iat?: number;
  exp?: number;
}

// Also can do this 

// export interface NewType
//   extends Pick<TypeToExtend, "user_id" | "email" | "firstName" | "lastName"> {
//   newField1: type;
//   newField2: type;
// }
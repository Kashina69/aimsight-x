export interface UserDocument {
  _id?: string;
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPublic {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface JWTPayload {
  sub: string;   // user _id
  email: string;
  iat?: number;
  exp?: number;
}
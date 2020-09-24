import { Request, Response } from 'express'
import { InputType, Field } from "type-graphql";
import { Redis } from 'ioredis';

export type MyContext = {
  redis: Redis
  req: Request & { session?: Express.Session }
  res: Response
}

export type NotAuthorizedError = {
  code: Number
  msg: String
}

@InputType()
export class UserInput {
  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;
}

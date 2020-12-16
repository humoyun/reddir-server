import { Request, Response } from 'express'
import { InputType, ObjectType, Field, registerEnumType } from "type-graphql";
import { Redis } from 'ioredis';
import Express from 'express-session'

import {voteLoader} from './utils/voteLoader'

export type MyContext = {
  redis: Redis
  req: Request & { session?: Express.Session & { userId: string } }
  res: Response
  voteLoader: ReturnType<typeof voteLoader>
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


@ObjectType()
export class FieldError {
  @Field()
  field: string

  @Field()
  message: string
}

export enum PostType {
  IMG = "image",
  VID = "video",
  TXT = "text",
  LNK = "link",
  PLL = "poll"
}

export enum SubreddixType {
  PRV = "private",
  RST = "restricted",
  PUB = "public"
}

registerEnumType(PostType,  {
  name: "PostType",
  description: "Defines possible values for post input type" 
})

export type None = null | undefined
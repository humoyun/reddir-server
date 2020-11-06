// required to make the type reflection work
import "reflect-metadata";
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { createConnection } from "typeorm";
import connectRedis from "connect-redis";
import session from 'express-session';
import express from 'express';
import Redis from "ioredis";
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'

import { SubRedddixResolver } from "./resolvers/subreddix";
import { UserResolver } from './resolvers/user';
import { PostResolver } from './resolvers/post';

import { IS_PROD, COOKIE_NAME } from './constants';
import typeORMConfig from './type-orm.config';
import { sendEmail } from "./utils/sendEmail";

import { Subreddix } from "./entities/Subreddix";
import { User } from "./entities/User";
import { Post } from "./entities/Post";
import { Vote } from "./entities/Vote";


dotenv.config();

const ONE_WEEK = 1000 * 3600 * 24 * 7;

const main = async () => {
  const PORT = 4400;
  
  /**
   * Generally, you must create connection only once in your application bootstrap, 
   * and close it after you completely finished working with the database. In practice, 
   * if you are building a backend for your site and your backend server 
   * always stays running - you never close a connection.
   */
  const connection = await createConnection({
    type: "postgres",
    database: "reddir",
    username: "postgres",
    password: "postgres",
    logging: true,
    synchronize: true,
    migrations: [path.join(__dirname, "/migrations/*")],
    entities: [User, Post, Vote, Subreddix],
    namingStrategy: new SnakeNamingStrategy()
  });

  // when you need to do migrations
  // await connection.runMigrations()
  
  const app = express();
  const RedisStore = connectRedis(session)
  const redis = new Redis();

  app.use(cors({
    origin: "http://localhost:4411",
    credentials: true
  }));

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        ttl: 86400 * 7, // one week
      }),
      cookie: {
        maxAge: ONE_WEEK, // one month
        httpOnly: true, // client cannot access this cookie
        secure: IS_PROD, // if true works only in https
        sameSite: true, // csrf
      },
      saveUninitialized: false, //
      secret: process.env.SECRET_KEY as string,
      resave: false,
    })
  );  

  const apollo = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver, UserResolver, SubRedddixResolver],
      validate: false
    }),
    context: ({req, res}) => ({ redis, req, res })
  })

  // defaulsts to cors: { origin: "*" }
  apollo.applyMiddleware({ app, cors: false });

  app.listen(PORT, ()=> {
    console.log(`Reddir Server started at port: ${PORT}`)
  })  
}

/**
 * Main entry function
 */
main().catch(err => {
  console.error(err)
})
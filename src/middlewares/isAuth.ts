import { MiddlewareFn } from "type-graphql";
import { MyContext } from "src/types";

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  console.warn("*** isauth:middleware ***");
  if (!context.req.session.userId) { 
    throw new Error("Not Authenticated")
  }

  return next()
}
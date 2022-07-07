import { Injectable, NestMiddleware } from "@nestjs/common";
import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { jwtConstants } from "src/auth/auth.contasnt";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log(req.headers);

    if (req.headers && req.headers.authorization) {
      req.headers.authorization = req.headers.authorization.replace(
        "Bearer ",
        ""
      );
      console.log(req.headers.authorization);
      verify(req.headers.authorization, jwtConstants.secret, (err, decoded) => {
        if (decoded) {
          req["userInfo"] = decoded;
          next();
        }
         else if (err) {
          res.status(401).json({
            statusCode: 401,
            message: "Unauthorised Request",
            data: {},
          });
        }
        else {
          res.status(401).json({
            statusCode: 401,
            message: "Unauthorised 1 Request",
            data: {},
          });
        }
      });
    } else {
      res.status(401).json({
        statusCode: 401,
        message: "Unauthorised 2 Request",
        data: {},
      });
    }
  }
}

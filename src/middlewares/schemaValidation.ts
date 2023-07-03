import { NextFunction, Request, Response } from "express";
import { Item } from "protocols";

export default function schemaValidation(schema) {
    return (req: Request, res: Response, next: NextFunction) => {
      const validation = schema.validate(req.body, { abortEarly: false });
      if (validation.error) {
        const logs = validation.error.details.map((error) => error.message);
        return res.status(422).send(logs);
      }
      next();
    };
  }
  
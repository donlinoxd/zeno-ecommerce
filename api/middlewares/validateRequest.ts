// TODO: delete this middleware ?

import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const validateRequest =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        params: req.params,
        query: req.query,
      });

      next();
    } catch (error) {
      res.status(400).json(error);
    }
  };

export default validateRequest;

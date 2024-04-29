import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
const logger = new Logger();

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  /**
   * Logs incoming request details.
   * @param req Request The incoming request object.
   * @param res Response The response object.
   * @param next NextFunction The next middleware function in the chain.
   */
  use(req: Request, res: Response, next: NextFunction) {
    logger.log('Request...', req.headers);
    next();
  }
}

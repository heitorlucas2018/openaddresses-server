import { Response, Request } from 'express';

export default interface RestApi {
    get(req: Request, res: Response): Response;
}
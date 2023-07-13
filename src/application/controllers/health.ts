import { Request, Response } from "express";
import { MethodsHttp, RestController } from "../../config/decorators/controller";
import HealthService from "../services/healthService";

const path = "health"
export default class Health {
    @RestController(MethodsHttp.GET, path)
    get(req: Request, res: Response): Response{
        return new HealthService().verifyStatusInternalServices(req, res);
    }

}
import { Request, Response } from "express";
import { connection, STATES } from "mongoose";

export default class HealthService {

    public verifyStatusInternalServices(req: Request, res: Response): Response {
        return res.send({
            status: {
                service: "ok",
                dataBase: STATES[connection.readyState],
                cacheEnable: process.env?.ENABLE_CACHE
            }
        });
    }
}
import { Request, Response } from "express";
import { RestController } from "../../config/decorators/controller";

const path = "teste"
export default class Health {

    @RestController("get", path)
    get(req: Request, res: Response): Response{
        return res.send({status: "ok"})
    }

    @RestController("post", path)
    teste(req: Request, res: Response): Response{
        return res.send({status: req.method})
    }
}
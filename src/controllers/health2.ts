import { Request, Response } from "express";
import Controller from "../config/decorators/controller";
import RestApi from "./restInterface";

@Controller("teste", "", Health2)
export default class Health2 implements RestApi {
    constructor() {}
    get(req: Request, res: Response): Response {
       return res.send({returnStatus: "OK"})
    }
}
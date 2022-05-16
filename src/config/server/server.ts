import Express, { Request, Response } from 'express';
import respUserNocache from 'nocache';
import env from 'dotenv';
import { useCache } from './serverCache';
import Logger from '../console/console';

env.config();
const _express: Express.Express = Express();

/**
 * Creating implementation to server using express framework
 */
export default class Server {
    
    static CONFIG_NAME_PAHT = /([0-9])/ig
    /**
     * 
     * @param express 
     * @param enableCache enable use  the cache
     */
    constructor(private express = _express) {
        this.init()
    }

    init() {
        if (eval(process.env.ENABLE_CACHE || 'false')) { 
            this.cacheConfiguration()
        }
        this.defaultConfiguration()
    }

    /**
     * Cache configuration to server
     **/
    private cacheConfiguration(): void {
        Logger.debug('Configuration Cache to server')
        this.express.use(useCache)
    }

    /**
     * Default configuration to server
     **/
    private defaultConfiguration(): void {
        Logger.debug('Default Configuration')
        this.express.use(respUserNocache())
        this.express.get("/health", (req, resp) => (resp.json({ status: 'UP' })))
        this.express.listen(process.env.PORT, () => Logger.log(`Server running in http://0.0.0.0:${process.env.PORT}`))
    }

    static createRoute(path: string) {
        Logger.debug(`Create route path => http://0.0.0.0:${process.env.PORT}/${path}`)
        if (path === null || path === undefined || path.match(Server.CONFIG_NAME_PAHT)) {
            throw new Error("The  path is null or invalid");
        }
        return _express.route("/" + path);
    }

    static start(): Server {
        return new Server()
    }

}
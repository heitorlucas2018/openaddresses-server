import NodeCache from 'node-cache';
import { Request, Response, NextFunction } from 'express';
import Logger from '../console/console';

const CONFIG_CACHE_TTL = 1000
const CONFIG_CAHE_CHECKPERIOD = 1000

const serverCache = new NodeCache({
    stdTTL: CONFIG_CACHE_TTL,
    checkperiod: CONFIG_CAHE_CHECKPERIOD
})

export function useCache(req: Request, resp: Response, next: NextFunction): void {
    Logger.debug('Register Cache to server')
    const key = req.url;
    if (serverCache?.has(key) && req.method === 'GET') {
        Logger.log('Response to request with storage cache.')
        resp.header('Content-Type','application/json; charset=utf-8')
        resp.status(200).send(serverCache.get(key))
    } else if (req.method === 'GET') {
        const send = resp.send;
        resp.send = (body: any) => {
            Logger.log('Response to request and save in  cache.')
            serverCache.set(resp.req.url, body)
            return send.bind(resp)(body);
        }
        next()
    }
}

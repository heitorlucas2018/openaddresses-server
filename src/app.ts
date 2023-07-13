require('dotenv').config();


import Server from './config/server/server';
import Logger from './config/console/console';
import AutoLoadFiles from './config/autoLoad/autoLoadApplication';
import MongoConfig from './config/db/mongoConfig';



MongoConfig();
AutoLoadFiles()

Logger.info('init do server')

Server.start().init(booleanEval(process.env.ENABLE_CACHE))


function booleanEval(value: string | undefined): boolean {
    if (value === 'true') {
        return true;
    }

    return false;
}
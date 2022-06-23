import Server from './config/server/server';
import Logger from './config/console/console';
import AutoLoadFiles from './config/autoLoad/autoLoadApplication';

AutoLoadFiles()

Logger.info('init do server')

Server.start()
import Server from './config/server/server';
import Logger from './config/console/console';

import Health from 'src/application/controllers/health';
import AutoLoadFiles from './config/autoLoad/autoLoadApplication';

new Health();

AutoLoadFiles()

Logger.info('init do server')

Server.start()
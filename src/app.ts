import Server from './config/server/server';
import Logger from './config/console/console';

import './config/connectionDB';


Logger.info('init do server')

Server.start()
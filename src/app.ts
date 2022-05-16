import Server from './config/server/server';
import Logger from './config/console/console';

//import './config/connectionDB';
import Health from '@controllers/health';
import Health2 from '@controllers/health2';

Server.createRoute("/test").get((req, res) => res.send())
    
new Health();
new Health2();

Logger.info('init do server')

Server.start()
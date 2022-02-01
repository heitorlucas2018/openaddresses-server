declare module 'Logger' {
    import Logger = require('node:Logger');
    export = Logger;
}
declare module 'node:Logger' {
    global {
        interface Logger {
            log(message?: any, ...optionalParams: any[]): void
            info(message?: any, ...optionalParams: any[]): void
            debug(message?: any, ...optionalParams: any[]): void
        }
    }
}

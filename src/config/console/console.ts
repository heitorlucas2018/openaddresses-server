import { colors } from './colors'

const date = new Date();

/**
 * @description Logger to application 
 * @example
 *  Logger.log('Hello')
 */
export default class Logger{

    /**
     * @param message 
     * @param optionalParams 
     */
    static log(message?: any, ...optionalParams: any[] ): void {
        console.log(`${colors.FgCyan}LOG::${date.toISOString()} - ${message}`, ...optionalParams, '\x1b[0m')    
    }
    
    /**
     * @param message 
     * @param optionalParams 
     */
    static info(message?: any, ...optionalParams: any[]): void {
        console.info(`${colors.FgGreen}INFO::${date.toISOString()} - ${message}`, ...optionalParams, '\x1b[0m')    
    }

    /**
     * @param message 
     * @param optionalParams 
     */
    static debug(message?: any, ...optionalParams: any[]): void {
        console.debug(`${colors.FgRed}DEBUG::${date.toISOString()} - ${message}`, ...optionalParams, '\x1b[0m')    
    }
}
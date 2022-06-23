import { lstatSync, readFileSync } from "fs";
import path, { join } from "path"

export default (): ConfigurationType => {
    const pathConfigJson = join(path.resolve(""), NAME_FILE_CONFIG);
    if( !!pathConfigJson && lstatSync(pathConfigJson).isFile()) {
        const config = require(pathConfigJson);
        return JSON.parse(config);
    }
    return DEFAUTL_CONFIGURATION;
}

const NAME_FILE_CONFIG =  "autoload.config.json";
const DEFAUTL_CONFIGURATION: ConfigurationType = {
    src:"src//application",
    autoimport: false,
    exclusions: [],
    inclusions: [
        "src/config/console/console.ts"
    ]
}

export type ConfigurationType = {
    src: string,
    autoimport: boolean,
    exclusions: Array<string>,
    inclusions: Array<string>
}
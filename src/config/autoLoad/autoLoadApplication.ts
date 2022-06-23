import { resolveObjectURL } from "buffer";
import { lstatSync, readdirSync } from "fs";
import { join, resolve } from "path";
import resolveConfig from "./resolveConfig";

const config = resolveConfig()

export default function autoLoadFiles(): void {
    const basePath = resolve("");
    const fullPath = join( basePath, 'src', 'application');
    const files = readdirSync(fullPath);
    
    if(isObject(files)) {
        const arraysOfFiles: any[] = [];
        foreachFolder(files, fullPath, (file: string) => arraysOfFiles.push(file));
        if(config.autoimport) {
            arraysOfFiles.concat(config.inclusions).forEach(file => {require(file)})
        }
    }
}

export function foreachFolder(files: string[], relativePath: string, predicate?: (obj: string ) => void) : any[] | string[] {
    if( nonNullOrUndefined(files) ) {
        return files
            .filter(path => !isExcludedPath(join(relativePath, path)))
            .map(file => {
                const fullPath = join(relativePath, file);
              
                console.log(fullPath)

                if(lstatSync(fullPath).isDirectory()) {
                    const filesToPath = readdirSync(fullPath);
                    return foreachFolder(filesToPath, fullPath, predicate);
                }

                if(typeof predicate === 'function') {
                    predicate(fullPath);
                }

                return fullPath;
            })
    }
    return [];
}

function isExcludedPath(path: string): boolean {
    return config.exclusions
        .filter((value) => (path.match(RegExp(`(${value})`,'gm')) !== null)).length > 0;
}

function isObject(object: any): boolean {
    return nonNullOrUndefined(object) &&
           typeof object == 'object';
}

function nonNullOrUndefined(object: any): boolean {
    return object !== null && 
           object !== undefined;
}
import { lstatSync, readdirSync } from "fs";
import { join, resolve } from "path";

export default function autoLoadFiles(): void {
    const basePath = resolve("");
    const fullPath = join( basePath, 'src', 'application');
    const files = readdirSync(fullPath);
    
    if(isObject(files)) {
        const arraysOfFiles: any[] = [];
        foreachFolder(files, fullPath, (file: string) => arraysOfFiles.push(file));
        arraysOfFiles.map(file => {
            //console.log("path to files ", file)
            require(file)
        })
    }
}

export function foreachFolder(files: string[], relativePath: string, predicate?: (obj: string ) => void) : any[] | string[] {
    if( nonNullOrUndefined(files) ) {
        return files.map(file => {
            const fullPath = join(relativePath, file);
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

function isObject(object: any): boolean {
    return nonNullOrUndefined(object) &&
           typeof object == 'object';
}

function nonNullOrUndefined(object: any): boolean {
    return object !== null && 
           object !== undefined;
}
import { application } from "express";
import { join, resolve } from "path";

export default function AutoLoadFiles() {
    const basePath = resolve("");
    const fullPath = join( basePath, 'src', 'application');
    console.log(fullPath)
}
import { resolve } from "path";
import Server from '../server/server';

const path = require('path');

interface routeClass {
    route: any
    nome: string
    properties: any
}
const instances: Array<any> = [];

export default function Controller<T extends { new(...args: any[]): {} }>(route: string, relativePath: string, teste: T): any{
    Server.createRoute(route).get((req, res) => res.send({status:"OKK"}))
    instances.push({
        nome: teste.name,
        route: route,
        relativePath: relativePath
    });
    console.log('Teste anotation', resolve(relativePath),instances)
}
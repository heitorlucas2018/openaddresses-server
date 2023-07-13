import Server from '../server/server';

export enum MethodsHttp {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE"
};


const createRoute = {
    GET: (routePath: string, caller: any) => Server.createRoute(routePath).get(caller),
    POST: (routePath: string, caller: any) => Server.createRoute(routePath).post(caller),
    PUT: (routePath: string, caller: any) => Server.createRoute(routePath).put(caller),
    PATCH: (routePath: string, caller: any) => Server.createRoute(routePath).patch(caller),
    DELETE: (routePath: string, caller: any) => Server.createRoute(routePath).delete(caller),
};

export function RestController(method: MethodsHttp, route?: string): any{
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        if(descriptor && descriptor.value instanceof Function) {
            const fun = Object.getOwnPropertyDescriptor(createRoute, method.toUpperCase());
            if(fun && fun.value instanceof Function) {
                fun.value(route, descriptor.value)
            }
        }
      };
}
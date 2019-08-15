import {Class} from "../../core/class";

export namespace BeanFactory {
    export const FACTORY_BEAN_PREFIX = '&';
}
export interface BeanFactory {
    getBean<T>(name: string, requiredType: Class<T>): T;
    getBean(name: string): object;
    getBean<T>(requiredType: Class<T>): T;
    getBean(name: string, ...args: any[]): object;
    getBean<T>(requiredType: Class<T>, ...args: any[]): object;
    containsBean(name: string): boolean;
    isSingleton(name: string): boolean;
    isPrototype(name: string): boolean;
    getType(name: string): Class<object>;
    getAliases(name: string): string[];
    // isTypeMatch
}


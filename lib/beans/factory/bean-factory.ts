import {Class} from "../../core/class";
import {AttributeAccessor} from "../../core/attribute-accessor";
import {BeanMetadataElement} from "../bean-metadata-element";

export interface BeanFactory extends AttributeAccessor, BeanMetadataElement {
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


///<reference path="decorators/autowired.ts"/>
import {Constructor} from "./types/constructor";
import {getServiceValue, ServiceValue} from "./decorators";
import {getAutowiredValue} from "./decorators/autowired";

export class BeanFactory {

    static beanMapByType = new Map<Constructor<any>, any>();
    static beanMapByName = new Map<string, any>();

    /**
     * 创建实例
     * @param {Constructor<T>} type
     * @return {T}
     */
    static create<T>(type: Constructor<T>): T {
        if (this.beanMapByType.has(type)) {
            return this.beanMapByType.get(type);
        }

        const serviceValue: ServiceValue = getServiceValue(type);

        if (this.beanMapByName.has(serviceValue.name)) {
            return this.beanMapByName.get(serviceValue.name);
        }

        const args = serviceValue.providers.length ? serviceValue.providers.map(
            provider => BeanFactory.create(provider)) : [];
        const result = new type(...args);

        const autowiredValue = getAutowiredValue(type);

        if (autowiredValue) {
            autowiredValue.forEach(item => result[item.propertyKey] = BeanFactory.create(item.type));
        }
        this.beanMapByType.set(type, result);
        this.beanMapByName.set(serviceValue.name, result);
        return result;
    }
}
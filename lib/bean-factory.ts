///<reference path="decorators/autowired.ts"/>
import {Constructor} from "./types/constructor";
import {getAutowiredValue} from "./decorators/autowired";
import {ComponentValue, getComponentValue} from "./decorators/component";

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

        const componentValue: ComponentValue = getComponentValue(type);

        if (this.beanMapByName.has(componentValue.value)) {
            return this.beanMapByName.get(componentValue.value);
        }

        const args = componentValue.providers.length ? componentValue.providers.map(
            provider => BeanFactory.create(provider)) : [];
        const result = new type(...args);

        const autowiredValue = getAutowiredValue(type);

        if (autowiredValue) {
            autowiredValue.forEach(item => result[item.propertyKey] = BeanFactory.create(item.type));
        }
        this.beanMapByType.set(type, result);
        this.beanMapByName.set(componentValue.value, result);
        return result;
    }
}
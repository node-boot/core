import {DecoratorOptionNullableFactory} from "ts-decorators-utils";
import {Constructor} from "../types/constructor";
import {getBeanName} from "../utils/bean-util";

const COMPONENT_METADA_KEY = Symbol('Component');

type ComponentOption = {
    value: string;
} | string;

type ComponentValue = {
    value: string;
    providers: Constructor[];
}

const componentTypes = [];

const Component = DecoratorOptionNullableFactory.createClassDecorator<ComponentValue, ComponentOption>(
    COMPONENT_METADA_KEY, (option, target) => {
        if (componentTypes.includes(target)) {
            throw '相同的名字被定义';
        }
        componentTypes.push(target);
        const providers: Constructor[] = Reflect.getMetadata('design:paramtypes', target);
        if (option) {
            if (typeof option === 'string') {
                return {
                    value: option,
                    providers
                };
            } else {
                return {
                    value: option.value,
                    providers
                };
            }
        }
        return {
            value: getBeanName(target),
            providers
        };
    });

function getComponentValue(target: any): ComponentValue | null {
    return Reflect.getMetadata(COMPONENT_METADA_KEY, target.prototype);
}

function getComponentTypes() {
    return [...componentTypes];
}

export {COMPONENT_METADA_KEY, ComponentOption, ComponentValue, Component, getComponentValue, getComponentTypes};

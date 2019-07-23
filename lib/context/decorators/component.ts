import {Constructor} from "../../types/constructor";
import {getBeanName} from "../../utils/bean-util";
import {DecoratorFactoryBuilder} from "ts-decorators-utils/lib/decorator-factory-builder";

const COMPONENT_METADATA_KEY = Symbol('Component');

type ComponentOption = string | void;

type ComponentValue = {
    value: string;
    providers: Constructor[];
}

const componentTypes = [];

const Component = DecoratorFactoryBuilder.createClassDecoratorFactory<ComponentOption, ComponentValue>(
    (option, target) => {
        if (componentTypes.includes(target)) {
            throw '相同的名字被定义';
        }
        componentTypes.push(target);
        const providers: Constructor[] = Reflect.getMetadata('design:paramtypes', target);
        if (option) {
            return {
                value: option,
                providers
            };
        }
        return {
            value: getBeanName(target),
            providers
        };
    }, COMPONENT_METADATA_KEY);

function getComponentValue(target: any): ComponentValue | null {
    return Reflect.getMetadata(COMPONENT_METADATA_KEY, target.prototype);
}

function getComponentTypes() {
    return [...componentTypes];
}

export {COMPONENT_METADATA_KEY, ComponentOption, ComponentValue, Component, getComponentValue, getComponentTypes};

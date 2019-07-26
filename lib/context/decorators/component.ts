import {Constructor} from "../../start/types/constructor";
import {getBeanName} from "../../start/utils/bean-util";
import {DecoratorUtil} from "ts-decorators-utils";
import 'reflect-metadata';

const COMPONENT_METADATA_KEY = Symbol('Component');

type ComponentOption = string | void;

type ComponentValue = {
    value: string;
    providers: Constructor[];
}

const componentTypes: Function[] = [];

const Component = DecoratorUtil.makeClassDecorator<ComponentOption, ComponentValue>(
    (option, target) => {
        if (componentTypes.includes(target)) {
            throw '相同的名字被定义';
        }
        componentTypes.push(target);
        const providers: Constructor[] = Reflect.getMetadata('design:paramtypes', target) || [];
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

function getComponentValue(target: Function): ComponentValue | null {
    return Reflect.getMetadata(COMPONENT_METADATA_KEY, target);
}

function getComponentTypes() {
    return [...componentTypes];
}

export {COMPONENT_METADATA_KEY, ComponentOption, ComponentValue, Component, getComponentValue, getComponentTypes};

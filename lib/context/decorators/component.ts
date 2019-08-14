import {Constructor} from "../../start/types/constructor";
import {getBeanName} from "../../start/utils/bean-util";
import {DecoratorFactoryBuilder} from "ts-decorators-utils";
import 'reflect-metadata';

type ComponentOption = string | void;

type ComponentValue = {
    value: string;
    providers: Constructor[];
}

const componentTypes: Function[] = [];

const Component = DecoratorFactoryBuilder.create<ComponentValue>().class<ComponentOption>(
    (option, target, paramTypes) => {
        if (componentTypes.includes(target)) {
            throw new Error('相同的名字被定义');
        }
        componentTypes.push(target);
        if (option) {
            return {
                value: option,
                providers: paramTypes
            };
        }
        return {
            value: getBeanName(target),
            providers: paramTypes
        };
    }).build();

function getComponentTypes() {
    return [...componentTypes];
}

export {ComponentOption, ComponentValue, Component, getComponentTypes};

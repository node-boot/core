import {DecoratorOptionNullableFactory} from 'ts-decorators-utils';
import {Component} from "./component";

const AUTOWIRED_METADA_KEY = Symbol('Autowired');

type ConfigurationOption = {
    value: string;
} | string;


const Configuration = DecoratorOptionNullableFactory.createCustomClassDecorator<ConfigurationOption>(
    (option, target) => {
        if (option) {
            Component(option)(target);
        } else {
            Component(target);
        }
    });


export {ConfigurationOption, Configuration};

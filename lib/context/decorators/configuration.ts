import {Component} from "./component";
import {DecoratorFactoryBuilder} from "ts-decorators-utils/lib/decorator-factory-builder";

const AUTOWIRED_METADATA_KEY = Symbol('Autowired');

type ConfigurationOption = string | void;


const Configuration = DecoratorFactoryBuilder.createClassDecoratorFactory<ConfigurationOption>(
    (option, target) => Component(option)(target), AUTOWIRED_METADATA_KEY);


export {ConfigurationOption, Configuration};

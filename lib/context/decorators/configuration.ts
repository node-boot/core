import {Component} from "./component";
import {DecoratorUtil} from "ts-decorators-utils";

const AUTOWIRED_METADATA_KEY = Symbol('Autowired');

type ConfigurationOption = string | void;


const Configuration = DecoratorUtil.makeClassDecorator<ConfigurationOption>(
    (option, target) => Component(option)(target), AUTOWIRED_METADATA_KEY);


export {ConfigurationOption, Configuration};

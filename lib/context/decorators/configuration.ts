import {Component} from "./component";
import {DecoratorFactoryBuilder} from "ts-decorators-utils";

type ConfigurationOption = string | void;

const Configuration = DecoratorFactoryBuilder.create()
    .class<ConfigurationOption>((option, target) => Component(option)(target)).build();

export {ConfigurationOption, Configuration};

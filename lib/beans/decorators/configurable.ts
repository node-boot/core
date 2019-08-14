import {DecoratorFactoryBuilder, DecoratorUtil} from "ts-decorators-utils";
import {Component} from "../../context/decorators/component";


type ConfigurableOption = {
    value?: string;
    preConstruction: boolean;
} | boolean | void;

type ConfigurableValue = {
    preConstruction: boolean;
}

/**
 * 会使用Component
 * @type {(option: ConfigurableOption) => ClassDecorator}
 */
const Configurable = DecoratorFactoryBuilder.create<ConfigurableValue>()
    .class<ConfigurableOption>(option => ({
        preConstruction: typeof option === 'boolean' ? option : (option ? option.preConstruction : true)
    })).build();


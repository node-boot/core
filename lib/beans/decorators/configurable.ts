import {DecoratorUtil} from "ts-decorators-utils";
import {Component} from "../../context/decorators/component";


type ConfigurableOption = {
    value?: string;
    preConstruction?: boolean;
} | string | void;

type ConfigurableValue = {
    preConstruction: boolean;
}

const CONFIGURABLE_METADATA_KEY = Symbol('Configurable');

/**
 * 会使用Component
 * @type {(option: ConfigurableOption) => ClassDecorator}
 */
const Configurable = DecoratorUtil.makeClassDecorator<ConfigurableOption, ConfigurableValue>(
    ((option, target) => {
        let componentName;
        let configurableValue = {
            preConstruction: false
        };
        if (option) {
            if (typeof option === 'string') {
                componentName = option;
            } else {
                componentName = option.value;
                configurableValue = {
                    preConstruction: !!option.preConstruction
                };
            }
        }
        Component(componentName)(target);
        return configurableValue;
    }), CONFIGURABLE_METADATA_KEY
);
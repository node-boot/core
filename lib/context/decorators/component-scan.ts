import {Constructor} from "../../start/types/constructor";
import {DecoratorFactoryBuilder, DecoratorUtil} from "ts-decorators-utils";

const COMPONENT_SCAN_METADATA_KEY = Symbol('ComponentScan');

type ComponentScanOption = {
    baseDirectories: string[];
} | string[];

type ComponentScanValue = {
    baseDirectories: string[];
}

const ComponentScan = DecoratorFactoryBuilder.create<ComponentScanValue>()
    .class<ComponentScanOption>(option => {
        if (option) {
            let baseDirectories: string[];
            if (option instanceof Array) {
                baseDirectories = option;
            } else {
                baseDirectories = option.baseDirectories;
            }
            if (baseDirectories.length > 0) {
                return {
                    baseDirectories: [...new Set(baseDirectories)]
                }
            }
        }
        return {
            baseDirectories: ['']
        }
    }).build();

function getComponentScanValue(target: Constructor<any>): ComponentScanValue {
    return Reflect.getMetadata(COMPONENT_SCAN_METADATA_KEY, target);
}

export {ComponentScan, ComponentScanValue, getComponentScanValue, ComponentScanOption};

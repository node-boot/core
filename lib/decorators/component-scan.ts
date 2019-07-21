import {Constructor} from "../types/constructor";
import {DecoratorOptionNullableFactory} from "ts-decorators-utils";

const COMPONENT_SCAN_METADATA_KEY = Symbol('ComponentScan');

type ComponentScanParam = {
    baseDirectories: string[];
} | string[];

type ComponentScanValue = {
    baseDirectories: string[];
}

const ComponentScan = DecoratorOptionNullableFactory.createClassDecorator<ComponentScanValue, ComponentScanParam>(
    COMPONENT_SCAN_METADATA_KEY, (param) => {
        if (param) {
            let baseDirectories: string[];
            if (param instanceof Array) {
                baseDirectories = param;
            } else {
                baseDirectories = param.baseDirectories;
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
    }
);

function getComponentScanValue(target: Constructor<any>): ComponentScanValue {
    return Reflect.getMetadata(COMPONENT_SCAN_METADATA_KEY, target);
}

export {ComponentScan, ComponentScanValue, getComponentScanValue};

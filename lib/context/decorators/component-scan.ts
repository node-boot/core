import {DecoratorFactoryBuilder} from "ts-decorators-utils";

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

export {ComponentScan, ComponentScanValue, ComponentScanOption};

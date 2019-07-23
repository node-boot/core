import {DecoratorOptionNullableFactory} from "ts-decorators-utils"
import {ComponentScan} from "./component-scan";
import {NodeBootConfiguration} from "./node-boot-configuration";

type NodeBootApplicationOption = {
    scanBaseDirectories: string[];
} | string[];

/**
 * 使用ComponentScan, NodeBootConfiguration
 */
export const NodeBootApplication = DecoratorOptionNullableFactory.createCustomClassDecorator<NodeBootApplicationOption>(
    (option, target) => {
        let scanBaseDirectories = [];
        if (option) {
            if (option instanceof Array) {
                scanBaseDirectories = option;
            } else {
                scanBaseDirectories = option.scanBaseDirectories;
            }
        }
        ComponentScan(scanBaseDirectories)(target);
        NodeBootConfiguration()(target);
    });




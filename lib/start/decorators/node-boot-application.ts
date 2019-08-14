
import {DecoratorFactoryBuilder, DecoratorUtil} from "ts-decorators-utils";
import {ComponentScan, ComponentScanParam} from "../../context/decorators/component-scan";
import {NodeBootConfiguration} from "./node-boot-configuration";

type NodeBootApplicationOption = {
    scanBaseDirectories: string[];
} | string[];

/**
 * 使用ComponentScan, NodeBootConfiguration
 */
export const NodeBootApplication = DecoratorFactoryBuilder.create()
    .class<NodeBootApplicationOption>((option, target) => {
        let scanBaseDirectories: string[] = [];
        if (option) {
            if (option instanceof Array) {
                scanBaseDirectories = option;
            } else {
                scanBaseDirectories = option.scanBaseDirectories;
            }
        }
        ComponentScan(scanBaseDirectories)(target);
        NodeBootConfiguration()(target);
    }).build();





import {DecoratorFactoryBuilder, DecoratorUtil} from "ts-decorators-utils";
import {ComponentScan} from "../../context/decorators/component-scan";
import {NodeBootConfiguration} from "./node-boot-configuration";
import {NodeApplication} from "../node-application";

type NodeBootApplicationOption = {
    scanBaseDirectories: string[];
} | string[] | void;

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
        setTimeout(() => NodeApplication.run(target));
    }).build();




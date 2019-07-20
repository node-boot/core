import {DecoratorOptionNullableFactory} from "ts-decorators-utils";
import {Constructor} from "../../types/constructor";
import {ComponentScan} from "../../context/decorators/component-scan";

type NodeBootApplicationParam = {
    scanBaseDirectories: string[];
} | string[];

const NodeBootApplication = DecoratorOptionNullableFactory.createClassDecorator<NodeBootApplicationParam>(option => {

    ComponentScan();
});

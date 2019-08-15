import {Autowired} from "../lib/beans/decorators/autowired";
import {DecoratorUtil} from "ts-decorators-utils";
import {NodeBootApplication} from "../lib/start/decorators/node-boot-application";
import {ComponentScan} from "../lib/context/decorators/component-scan";
import "./test/test2";

// @NodeBootApplication()
class Demo {
    static b;
}
namespace Demo {
    export const a = 3;
}

console.log(Demo.a);


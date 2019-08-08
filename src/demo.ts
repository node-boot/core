import {Autowired} from "../lib/beans/decorators/autowired";
import {DecoratorUtil} from "ts-decorators-utils";
import {NodeBootApplication} from "../lib/start/decorators/node-boot-application";
import {ComponentScan} from "../lib/context/decorators/component-scan";

@NodeBootApplication()
class Demo {
}


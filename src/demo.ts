import {Autowired} from "../lib/beans/decorators/autowired";
import {DecoratorUtil} from "ts-decorators-utils";

class Demo {
    @Autowired()
    public a: string;
}


import {DecoratorUtil} from "ts-decorators-utils";
import {getComponentValue} from "./component";
import {Configuration} from "./configuration";

type ImportOption = Function[] | Function;


const Import = DecoratorUtil.makeClassDecorator<ImportOption>((option, target) => {
    const componentValue = getComponentValue(target);
    if (componentValue) {
        if (typeof option === 'function') {
            Configuration()(option);
        } else {
            option.forEach(o => Configuration()(o));
        }
    }
});


export {Import};
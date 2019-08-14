
import {DecoratorFactoryBuilder, DecoratorUtil} from "ts-decorators-utils";
import {getComponentValue} from "./component";
import {Configuration} from "./configuration";

type ImportOption = Function[] | Function;

const Import = DecoratorFactoryBuilder.create()
    .class<ImportOption>((option, target) => {
        const componentValue = getComponentValue(target);
        if (componentValue) {
            if (typeof option === 'function') {
                Configuration()(option);
            } else {
                option.forEach(o => Configuration()(o));
            }
        }
    }).build();


export {Import};

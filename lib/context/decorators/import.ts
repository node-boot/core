import {DecoratorFactoryBuilder} from "ts-decorators-utils/lib/decorator-factory-builder";
import {getComponentValue} from "./component";
import {Configuration} from "./configuration";

type ImportOption = Function[] | Function;


const Import = DecoratorFactoryBuilder.createClassDecoratorFactory<ImportOption>((option, target) => {
    setTimeout(() => {
        const componentValue = getComponentValue(target);
        if (componentValue) {
            if (typeof option === 'function') {
                Configuration()(option);
            } else {
                option.forEach(o => Configuration()(o));
            }
        }
    });
});


export {Import};
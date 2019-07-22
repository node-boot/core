import {DecoratorFactoryBuilder} from "ts-decorators-utils/lib/decorator-factory-builder";

const AUTOWIRED_METADA_KEY = Symbol('Autowired');

type AutowiredOption = {
    required?: boolean;
    type: Function;
} | Function;

type AutowiredValueItem = {
    required: boolean;
    type: Function;
    propertyKey: string;
}

const Autowired = DecoratorFactoryBuilder.createPropertyDecoratorFactory<AutowiredOption, AutowiredValueItem>(
    (option, target, propertyKey) => {
        if (option instanceof Function) {
            return {
                type: option,
                required: true,
                propertyKey
            };
        }
        return {
            type: option.type,
            required: option.required,
            propertyKey
        };
    }, AUTOWIRED_METADA_KEY
);

function getAutowiredValue(target: any): AutowiredValueItem[] | null {
    return Reflect.getMetadata(AUTOWIRED_METADA_KEY, target.prototype);
}

export {AUTOWIRED_METADA_KEY, AutowiredOption, AutowiredValueItem, Autowired, getAutowiredValue};

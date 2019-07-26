import {DecoratorUtil} from "ts-decorators-utils";


const AUTOWIRED_METADA_KEY = Symbol('Autowired');

type AutowiredOption = {
    required?: boolean;
    type: Function;
} | Function;

type AutowiredValueItem = {
    required: boolean;
    type: Function;
    propertyKey: string | symbol;
}


const Autowired = DecoratorUtil.makePropertyDecorator<AutowiredOption, AutowiredValueItem>(
    (option, target, propertyKey) => {
        if (typeof option === 'object') {
            return {
                type: option.type,
                required: !!option.required,
                propertyKey
            };
        }
        return {
            type: option,
            required: true,
            propertyKey
        };
    }, AUTOWIRED_METADA_KEY
);

function getAutowiredValue(target: Function): AutowiredValueItem[] | null {
    return Reflect.getMetadata(AUTOWIRED_METADA_KEY, target.prototype);
}

export {AUTOWIRED_METADA_KEY, AutowiredOption, AutowiredValueItem, Autowired, getAutowiredValue};

import {propertyDecoratorFactoryBuilder, DecoratorFactory} from 'ts-decorators-utils';

const AUTOWIRED_METADA_KEY = Symbol('Autowired');

type AutowiredParam = {
    required?: boolean;
    type: any;
}

type AutowiredValueItem = {
    required: boolean;
    type: any;
    propertyKey: string;
}

const Autowired = DecoratorFactory.createPropertyDecorator<AutowiredValueItem, AutowiredParam>(
    AUTOWIRED_METADA_KEY, (option, target, propertyKey) => ({
        required: option.required,
        type: option.type,
        propertyKey
    })
);

function getAutowiredValue(target: any): AutowiredValueItem[] | null {
    return Reflect.getMetadata(AUTOWIRED_METADA_KEY, target.prototype);
}

export {AUTOWIRED_METADA_KEY, AutowiredParam, AutowiredValueItem, Autowired, getAutowiredValue};

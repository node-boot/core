// @ts-ignore
import {DecoratorFactoryBuilder} from "ts-decorators-utils";


const VALUE_METADA_KEY = Symbol('Value');

type ValueOption = {
    required?: boolean;
    type: Function;
} | Function;

type AutowiredMetadataValue = {
    required: boolean;
    type: Function;
    propertyKey: string | symbol;
}

const handler = (option, target, propertyKey) => {
    return typeof option === 'object' ? {
        type: option.type,
        required: !!option.required,
        propertyKey
    } : {
        type: option,
        required: true,
        propertyKey
    };
};

const Value = DecoratorFactoryBuilder.create<AutowiredMetadataValue>()
    .property<ValueOption>(handler)
    .method<ValueOption>(handler)
    .build();

function getValueMetadataValue(target: Function, propertyKey: string | symbol): AutowiredMetadataValue | null {
    return Reflect.getMetadata(VALUE_METADA_KEY, target.prototype, propertyKey);
}

export {VALUE_METADA_KEY, ValueOption, AutowiredMetadataValue, Value, getValueMetadataValue};

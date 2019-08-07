import {DecoratorFactoryBuilder, DecoratorUtil} from "ts-decorators-utils";
import {Constructor} from "ts-decorators-utils/dist/lib/bean/constructor";


const AUTOWIRED_METADA_KEY = Symbol('Autowired');

type AutowiredOption = {
    required: boolean;
} | boolean | void;

type AutowiredValue = {
    required: boolean;
}

const Autowired = DecoratorFactoryBuilder
    .create<AutowiredValue>()
    .property<AutowiredOption>(option => ({
        required: typeof option === 'boolean' ? option : (option ? option.required : true)
    })).build();

function getAutowiredValue(target: Function): AutowiredValue[] | null {
    return Reflect.getMetadata(AUTOWIRED_METADA_KEY, target.prototype);
}


export {Autowired, getAutowiredValue};

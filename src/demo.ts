import {DecoratorFactory} from "ts-decorators-utils/lib/decorator-factory";


type A = {
    a: string;
} | string | void;

// function createCustomClassDecorator((callback: (option: Object, target: Function) => void):
//     ((option: P) => ClassDecorator) & ClassDecorator;
// function createCustomClassDecorator<P>(callback: (option: P, target: Function) => void): ((option: P) => ClassDecorator);

function createCustomClassDecorator<VoidFunction>(callback: (option: void, target: Function) => void): ClassDecorator;
function createCustomClassDecorator<P>(callback: (option: P, target: Function) => void): (option: P) => ClassDecorator;

function createCustomClassDecorator<P>(callback: (option: P, target: Function) => void):
    ((option: P) => ClassDecorator) & ClassDecorator {
    return (...args) => {
        if (args[0] && args[0] instanceof Function) {
            return DecoratorFactory.createCustomClassDecorator<P>(callback)(null)(args[0])
        }
        return DecoratorFactory.createCustomClassDecorator<P>(callback)(args[0]);
    }

    // option => target => callback(option, target);
}

const AA = createCustomClassDecorator<A>(((option, target) => {

}));

// @AA()
// class B {
//
// }
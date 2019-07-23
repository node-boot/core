import {DecoratorFactoryBuilder} from "ts-decorators-utils/lib/decorator-factory-builder";
import {Import} from "../lib/context/decorators/import";

class B {}

@Import(B)
class A {

}


console.log('123');

// const ABC = DecoratorFactoryBuilder.createMethodDecoratorFactory<void>(((option, target, propertyKey, descriptor) => {
//     console.log(descriptor);
// }));
//
// class B {}
//
//
// const AA: ClassDecorator = (target) => {
//     return target;
// };
//
// @AA
// class A {
//
//     @ABC()
//     test(): number {
//         return 123;
//     }
//
// }


// type A = {
//     a: string;
// } | string | void;
//
// // function createCustomClassDecorator((callback: (option: Object, target: Function) => void):
// //     ((option: P) => ClassDecorator) & ClassDecorator;
// // function createCustomClassDecorator<P>(callback: (option: P, target: Function) => void): ((option: P) => ClassDecorator);
//
// function createCustomClassDecorator<VoidFunction>(callback: (option: void, target: Function) => void): ClassDecorator;
// function createCustomClassDecorator<P>(callback: (option: P, target: Function) => void): (option: P) => ClassDecorator;
//
// function createCustomClassDecorator<P>(callback: (option: P, target: Function) => void):
//     ((option: P) => ClassDecorator) & ClassDecorator {
//     return (...args) => {
//         if (args[0] && args[0] instanceof Function) {
//             return DecoratorFactory.createCustomClassDecorator<P>(callback)(null)(args[0])
//         }
//         return DecoratorFactory.createCustomClassDecorator<P>(callback)(args[0]);
//     }
//
//     // option => target => callback(option, target);
// }
//
// const AA = createCustomClassDecorator<A>(((option, target) => {
//
// }));

// @AA()
// class B {
//
// }
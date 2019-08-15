import {BeanFactory} from "./bean-factory";
import {Class} from "../../core/class";
import {DecoratorFactory} from "ts-decorators-utils";

export interface ListableBeanFactory extends BeanFactory{
    containsBeanDefinition(beanName: string): boolean;
    getBeanDefinitionCount(): number;
    getBeanDefinitionNames(): string[];
    // getBeanNamesForType
    getBeanNamesForType(type: Class<any>): string[];
    getBeanNamesForType(type: Class<any>, includeNonSingletons: boolean, allowEagerInit: boolean): string[];
    getBeansOfType<T>(type: Class<T>): Map<string, T>;
    getBeansOfType<T>(type: Class<T>, includeNonSingletons: boolean, allowEagerInit: boolean): Map<string, T>;
    getBeanNamesForAnnotation(annotationType: DecoratorFactory): string[];
    getBeansWithAnnotation(annotationType: DecoratorFactory): Map<string, object>;
    // findAnnotationOnBean(beanName: string, annotationType: DecoratorFactory): object;
}

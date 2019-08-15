import {ConstructorArgumentValues} from "./constructor-argument-values";
import {MutablePropertyValues} from "../../mutable-property-values";

export interface BeanDefinition {
    getParentName();
    setParentName(parentName: string): string;
    getBeanClassName(): string;
    setBeanClassName(beanClassName: string): void;
    getFactoryBeanName();
    setFactoryBeanName(factoryBeanName: string);
    getFactoryMethodName(): string;
    setFactoryMethodName(factoryMethodName: string);
    getScope(): string;
    setScope(scope: string);
    isLazyInit(): boolean;
    setLazyInit(lazyInit: boolean);
    getDependsOn(): string[];
    setDependsOn(...dependsOn: string[]);
    isAutowireCandidate(): boolean;
    setAutowireCandidate(autowireCandidate: boolean);
    isPrimary(): boolean;
    setPrimary(primary: boolean);
    getConstructorArgumentValues(): ConstructorArgumentValues;
    getPropertyValues(): MutablePropertyValues;
    isSingleton(): boolean;
    isPrototype(): boolean;
    isAbstract(): boolean;
    getRole(): number;
    getDescription(): string;
    getResourceDescription(): string;
    getOriginatingBeanDefinition(): BeanDefinition;
}

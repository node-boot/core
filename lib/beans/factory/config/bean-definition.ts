import {ConstructorArgumentValues} from "./constructor-argument-values";
import {MutablePropertyValues} from "../../mutable-property-values";
import {AttributeAccessor} from "../../../core/attribute-accessor";
import {BeanMetadataElement} from "../../bean-metadata-element";
import {ConfigurableBeanFactory} from "./configurable-bean-factory";

export namespace BeanDefinition {
    export const SCOPE_SINGLETON = ConfigurableBeanFactory.SCOPE_SINGLETON;
    export const SCOPE_PROTOTYPE = ConfigurableBeanFactory.SCOPE_PROTOTYPE;
    // 通常对应于用户定义的bean
    export const ROLE_APPLICATION = 0;
    export const ROLE_SUPPORT = 1;
    export const ROLE_INFRASTRUCTURE = 2;

}

export interface BeanDefinition extends AttributeAccessor, BeanMetadataElement {
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

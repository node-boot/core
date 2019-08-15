import {HierarchicalBeanFactory} from "../hierarchical-bean-factory";
import {SingletonBeanRegistry} from "./singleton-bean-registry";
import {BeanFactory} from "../bean-factory";

export namespace ConfigurableBeanFactory {
    export const SCOPE_SINGLETON = 'singleton';
    export const SCOPE_PROTOTYPE = 'prototype';
}
export interface ConfigurableBeanFactory extends HierarchicalBeanFactory, SingletonBeanRegistry {
    setParentBeanFactory(setParentBeanFactory: BeanFactory);
    // setBeanClassLoader(setBeanClassLoader: ClassLoader);
    // getBeanClassLoader(); setTempClassLoader getTempClassLoader
    setCacheBeanMetadata(setCacheBeanMetadata: boolean);
    setCacheBeanMetadata(): boolean;
    // setBeanExpressionResolver getBeanExpressionResolver setConversionService setConversionService

}

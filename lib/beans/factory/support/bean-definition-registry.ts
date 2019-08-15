import {AliasRegistry} from "../../../core/alias-registry";
import {BeanDefinition} from "../config/bean-definition";

/**
 * BeanDefinition 注册接口
 * 子类有 RootBeanDefinition、ChildBeanDefinition
 * 通常使用AbstractBeanDefinition统一表示
 */
export interface BeanDefinitionRegistry extends AliasRegistry {
    registerBeanDefinition(beanName: string, beanDefinition: BeanDefinition): void;
    removeBeanDefinition(beanName: string): void;
    getBeanDefinition(beanName: string): BeanDefinition;
    containsBeanDefinition(beanName: string): boolean;
    getBeanDefinitionNames(): string[];
    getBeanDefinitionCount(): number;
    isBeanNameInUse(beanName: string): boolean;
}

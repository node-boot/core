import {BeanFactory} from "./bean-factory";

export interface HierarchicalBeanFactory extends BeanFactory {
    getParentBeanFactory(): BeanFactory;
    containsLocalBean(name: string): boolean;
}

/**
 * 共享bean定义注册接口
 */
export interface SingletonBeanRegistry {
    registerSingleton(beanName: string, singletonObject: object): void;
    getSingleton(beanName: string): object;
    containsSingleton(beanName: string): boolean;
    getSingletonNames(): string[];
    getSingletonCount(): number;
    getSingletonMutex(): object;
}

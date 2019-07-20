import {Constructor} from "../types/constructor";
import 'reflect-metadata';
import {getBeanName} from "../utils/bean-util";
import {classDecoratorFactoryBuilderOptionsEmptiable} from "ts-decorators-utils/lib/decorator-util";

const SERVICE_METADATA_KEY = Symbol('Service');
const serviceTypeSet = new Set();

const serviceMetadataValueConverter = (param, target) => {
    serviceTypeSet.add(target);
    const providers: Constructor[] = Reflect.getMetadata('design:paramtypes', target);
    if (param) {
        if (typeof param === 'string') {
            return {
                name: param,
                providers
            };
        } else {
            return {
                name: param.name,
                providers
            };
        }
    }
    return {
        name: getBeanName(target),
        providers
    };
};

type ServiceValue = {
    name: string;
    providers: Constructor[];
}

type ServiceParam = {
    name: string;
} | string;

const Service = classDecoratorFactoryBuilderOptionsEmptiable<ServiceParam, ServiceValue>(
    SERVICE_METADATA_KEY, serviceMetadataValueConverter);

function getServiceValue(target: any): ServiceValue {
    return Reflect.getMetadata(SERVICE_METADATA_KEY, target);
}

function getServiceTypes() {
    return [...serviceTypeSet];
}

export {SERVICE_METADATA_KEY, serviceMetadataValueConverter, ServiceParam, ServiceValue, Service, getServiceValue, getServiceTypes};
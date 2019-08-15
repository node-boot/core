export interface AttributeAccessor {
    setAttribute(name: string, value: any);
    getAttribute(name: string): object;
    removeAttribute(name: string): object;
    hasAttribute(name: string): boolean;
    attributeNames(): string[];
}

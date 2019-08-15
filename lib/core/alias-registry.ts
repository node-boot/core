/**
 * 管理别名的通用接口，作为
 */
export interface AliasRegistry {
    registerAlias(name: string, alias: string): void;
    removeAlias(alias: string): void;
    isAlias(alias: string): boolean;
    getAliases(name: string): string[];
}

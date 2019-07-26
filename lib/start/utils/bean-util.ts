import {Constructor} from "../types/constructor";

export function getBeanName(fun: Function) {
    return fun.name.replace(/([A-Z]+)(.*)/, (m, m1, m2) => m1.toLowerCase() + m2);
}

import * as path from 'path';
import * as fs from 'fs';
import * as yml from 'yamljs';
import {EventEmitter} from 'events';
import {ServiceParser} from "./parser";
import {ComponentScan, getComponentScanValue} from "../context/decorators/component-scan";
import {Constructor} from "ts-decorators-utils/dist/lib/bean/constructor";
import {DecoratorUtil} from "ts-decorators-utils";
import {Component} from "../context/decorators/component";
import {componentScan} from "./test";


let fileDirPath = '';

const optionsEmitter = new EventEmitter();

export class NodeApplication {
    public static run(target: Function) {
        const componentScanValue = DecoratorUtil.getMetadata(ComponentScan, target);
        console.log(componentScanValue);
        componentScan();
    }
}

function run(type: Constructor) {
    let filePath;
    let options;
    if (filePath) {
        let fileName;
        const index = filePath.lastIndexOf('/');
        if (index) {
            fileDirPath = filePath.substring(0, index);
            fileName = filePath.slice(index + 1, -1);
        } else {
            fileName = filePath;
        }
        options = loadOptions(fileName);
    }
    options = loadOptions();
    options = parseProfiles(options);
    optionsEmitter.emit('loaded', options);

    ServiceParser.parse();

}

/**
 * 加载文件
 * @param {string} fileName
 * @return {any}
 */
function loadOptions(fileName: string = 'application.yml') {
    // TODO
    let filePath = path.join(__dirname, '../src', fileDirPath, fileName);
    if (fs.existsSync(filePath)) {
        return yml.load(filePath);
    }
    return {};
}


/**
 * 解析 profiles属性
 * @param options
 * @param {boolean} main 是否为主配置文件 application.开头
 * @return {any}
 */
function parseProfiles(options, main: boolean = true) {
    if (options.node && options.node.profiles) {
        const {active, include} = options.node.profiles;
        if (main && active) {
            let activeOptions = loadOptions(`application-${active}.yml`);
            activeOptions = parseProfiles(activeOptions, false);
            return {
                ...options,
                ...activeOptions
            };
        }
        if (include) {
            return include.split(',').reduce((options, include) => {
                let includeOptions = loadOptions(`application-${active}.yml`);
                includeOptions = parseProfiles(includeOptions, false);
                return {
                    ...options,
                    ...includeOptions,
                }
            }, {});
        }
    }
    return options;
}

export {run, optionsEmitter};



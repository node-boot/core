import * as fs from 'fs';
import * as path from "path";

// optionsEmitter.on('loaded', options => {
//
//     componentScan('test/test2');
//     // TODO
//     // fs.readdirSync(dirPath)
//     //     .filter(fileName => fileName.endsWith('.js'))
//     //     .map(fileName => fileName.slice(0, -3)).forEach(name => )
//     // console.log(options);
// });

let mainFileName;
function directoryScanForImportFile(scanDirPath: string) {
    fs.readdirSync(scanDirPath)
        .forEach(name => {
            const filePath = path.join(scanDirPath, name);
            if (isTsFile(name) && name !== mainFileName) {
                console.log(filePath);
                require(filePath);
                return;
            }
            if (fs.lstatSync(filePath).isDirectory()) {
                directoryScanForImportFile(filePath);
            }
        });
}


function componentScan(scanDir = '') {

    const mainFile = process.argv[1];
    const index = mainFile.lastIndexOf('\\');
    mainFileName = mainFile.slice(index + 1, -1);
    const mainFileDir = mainFile.slice(0, index);

    const scanDirPath = path.join(mainFileDir, scanDir);

    directoryScanForImportFile(scanDirPath);
}

function isTsFile(name: string) {
    return name.endsWith('.ts') && !name.endsWith('.d.ts')
}

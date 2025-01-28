# File Ops
file-ops allow to use a single command to try and read input stream from a path, if it fails an error will be logged
It also allows a single command to write string to a file, if it fails an error will be logged.
## installation:
```
npm install @yehonathan-bar-ilan/file-ops
```

## usage:
### Import
```
import {readTextFile, writeStringToAFile} from '@yehonathan-bar-ilan/file-ops';
```
### Read content of file
```
const fileContent = await readTextFile('test-file-registry.txt');
console.log(fileContent);
```
### Write string to a file
```
await writeStringToAFile('test-write-file-registry.txt', 'white-dove-fly-with-the-wing-registry');
```
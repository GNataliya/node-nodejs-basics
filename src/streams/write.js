import { createWriteStream } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {
    
    const readFilePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const writeFileStream = createWriteStream(readFilePath);
    process.stdin.pipe(writeFileStream);

    console.log('write something for file in console');

};

write();
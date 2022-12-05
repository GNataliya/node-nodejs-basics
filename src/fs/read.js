import { readFile } from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
    
    const openFilePath = path.join(__dirname, 'files', 'fileToRead.txt');
    
    try {
        const textInFile = await readFile(openFilePath, 'utf8');
        console.log(textInFile);
    } catch (err) {
        throw new Error('FS operation failed'); 
    }
};

read();
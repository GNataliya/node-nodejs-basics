import { rename as renameFile } from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rename = async () => {
    
    const wrongFilename = path.join(__dirname, 'files', 'wrongFilename.txt');
    const correctFilename = path.join(__dirname, 'files', 'properFilename.md');

    try {
        await renameFile(wrongFilename, correctFilename);
    } catch (err) {
        throw new Error('FS operation failed'); 
    }
};

rename();
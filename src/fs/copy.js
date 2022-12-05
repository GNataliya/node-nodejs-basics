import { cp, copyFile, constants } from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const copy = async () => {
   
    const folderPath = path.join(__dirname, 'files');
    const folderNewPath = path.join(__dirname, 'files_copy');

    try {
        await cp(folderPath, folderNewPath, {recursive: true, force: false, errorOnExist: true});
    } catch (err) {
        throw new Error('FS operation failed'); 
    }
};

copy();
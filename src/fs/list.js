import { readdir } from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const list = async () => {

    const folderContent = path.join(__dirname, 'files');
    
    try {
        const listContent = await readdir(folderContent);
        console.log(listContent);
    } catch (err) {
        throw new Error('FS operation failed'); 
    }
};

list();
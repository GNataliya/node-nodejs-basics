import { rm } from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async () => {
   
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');
    
    try {
        await rm(filePath);
    } catch (err) {
        throw new Error('FS operation failed'); 
    }
};

remove();
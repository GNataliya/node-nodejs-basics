import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const calculateHash = async () => {
   
    const openFilePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    
    try {
        const fileRead = await readFile(openFilePath);
        const hashSum = createHash('sha256').update(fileRead).digest('hex');
        console.log(hashSum);
    } catch (err) {
        throw new Error(err); 
    }
};

calculateHash();
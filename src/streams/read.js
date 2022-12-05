import { createReadStream } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
    
    const readFilePath = path.join(__dirname, 'files', 'fileToRead.txt');
    const readFileStream = await createReadStream(readFilePath, 'utf-8').pipe(process.stdout);
        
};

read();
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {

    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const compressedFilePath = path.join(__dirname, 'files', 'archive.gz');

    const inputFile = createReadStream(filePath, 'utf-8')
    const outputFile = createWriteStream(compressedFilePath);
    const gzip = createGzip();

    inputFile.pipe(gzip).pipe(outputFile);

    console.log('file had compressed')
    
};

await compress();
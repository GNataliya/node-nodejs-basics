import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    
    const filePath = path.join(__dirname, 'files', 'archive.gz');
    const originalFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');

    const inputFile = createReadStream(filePath, 'utf-8')
    const outputFile = createWriteStream(originalFilePath);
    const fileFromGzip = createUnzip();

    inputFile.pipe(fileFromGzip).pipe(outputFile);

    console.log('file had decompressed')

};

await decompress();
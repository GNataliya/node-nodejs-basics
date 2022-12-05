import { writeFile } from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {

    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    const content = 'I am fresh and young';

    try {
        await writeFile(filePath, content, { flag: 'wx' });
    } catch (err) {
        throw new Error('FS operation failed'); 
    }
};

create();


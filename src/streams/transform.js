import { Transform } from 'stream';

export const transform = async () => {
    
    const reversContent = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, chunk.toString().split('').reverse().join(''));
        },
      });

    process.stdin.pipe(reversContent).pipe(process.stdout);

    console.log('write smth in console for reverse');
};

transform();
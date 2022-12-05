export const parseArgs = () => {

    const argumentsChoosed = process.argv.slice(2).reduce((acc, arg, i, arr) => {
        if(arg.startsWith('--') && arr[i + 1]){
            const argView = arg.replace('--', '');
            const argChanged = `${argView} is ${arr[i + 1]}`;
            acc.push(argChanged);
        }
        return acc;
      }, []);
      
      console.log(argumentsChoosed.join(', '));
};

parseArgs();
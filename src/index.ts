import readline from 'readline'
import chalk from 'chalk'
import stripAnsi from 'strip-ansi'

const KEYS = {
  UP: '1b5b41',
  RIGHT: '1b5b43',
  LEFT: '1b5b44',
  DOWN: '1b5b42',
  ENTER: '0d',
}

// type TemplateFn = <A extends any[]>(...args: A) => string

type RadioOption = {
  label: string
  value: any
}

// const templateFnRadio = (...options: RadioOption[]) => {
  
// }
    
export const run = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  // rl.
  const prompt = async (query: string): Promise<string> => new Promise((resolve) => {
    let index = 0;
    let length = 0;
    process.stdin.on('data', (buffer) => {
      const hex = buffer.toString('hex');
      if (hex === KEYS.RIGHT) {
        index = Math.min(2, index + 1);
      }
      if (hex === KEYS.LEFT) {
        index = Math.max(0, index - 1);
      }
      if (hex === KEYS.ENTER) {
        // console.log('enter', index);
        resolve(index)
      }
      // console.log(rl.line)
      const msg = ['typescript', 'javascript', 'rust'].map((pkg, i) => i === index ? chalk.bold(pkg) : pkg).join(' ');
      console.log(rl.cursor, length, msg.length)
      length = stripAnsi(msg).length
      if (length) rl.write(null, { ctrl: true, name: 'u' });
      rl.write(msg);
      // console.log(rl.getCursorPos())
      // if (length) {
      //   process.stdout.moveCursor(-length - 1, 0);
      // }
      // process.stdout.write(['typescript', 'javascript', 'rust'].map((pkg, i) => i === index ? chalk.bold(pkg) : pkg).join(' '))
      // process.stdout.

      // length = stripAnsi(msg).length;
    })
  })
  const answer = await prompt('test');
  rl.on('end', process.exit)
}
run();
// process.stdout.cursorTo(0, 0);
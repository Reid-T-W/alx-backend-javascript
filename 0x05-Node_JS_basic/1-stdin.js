process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
// const { spawn } = require('child_process');

// const childProcess = spawn('node', ['1-stdin.js']);
// childProcess.stdin.on('readable', () => {
//   const userInput = childProcess.stdin.read();
//   childProcess.stdout.write(`Your name is: ${userInput}\n`);
// });

// childProcess.stdin.on('end', () => {
//   childProcess.stdout.write('This important software is now closing\n');
// });

// const { spawn } = require('child_process');

// const ls = spawn('node', ['1-stdin.js']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// const util = require('util');
function displayMessage(msg) {
  console.log(msg);
  // Cloning Console.log
  // process.stdout.write(util.format.apply(null, [msg, '\n']));
}
module.exports = displayMessage;

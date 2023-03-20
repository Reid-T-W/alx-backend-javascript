const util = require('util');

function displayMessage(msg) {
  process.stdout.write(util.format.apply(null, [msg, '\n']));
}
module.exports = displayMessage;

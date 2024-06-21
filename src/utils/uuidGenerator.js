const { v4: uuidv4 } = require('uuid');

function uuidGenerator() {
  return uuidv4();
}

module.exports = uuidGenerator;
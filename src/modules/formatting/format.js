module.exports = function(init, callback) {
  let passback = { steps: 2 };
  _logger.info(`S 1/2 | M ${init.number}/${init.total} | Adding prototypes`);
  callback(passback);
};

/**
 * String Prototypes
 */

String.prototype.inlineCode = function() {
  return '`' + this + '`';
};

String.prototype.codeBlock = function(language) {
  if (language) return '```' + language + '\r\n' + this + '\r\n' + '```';
  else return '```' + '\r\n' + this + '\r\n' + '```';
};

String.prototype.italic = function() {
  return `*${this}*`;
};

String.prototype.bold = function() {
  return `**${this}**`;
};

String.prototype.underline = function() {
  return `__${this}__`;
};

String.prototype.prefixed = function() {
  return process.env['CMD_PREFIX'] + this;
};

String.prototype.capitalize = function() {
  let s = this.split('');
  s[0] = s[0].toUpperCase();
  return s.join('');
};

String.prototype.newLine = '\r\n';

/**
 * Lang Format Function
 */

const util = require('util');

String.prototype.format = function(...template) {
  return util.format(this, template);
};

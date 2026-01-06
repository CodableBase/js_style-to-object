'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (typeof sourceString !== 'string' || sourceString.length === 0) {
    return result;
  }

  const declarations = sourceString.split(';');

  for (let i = 0; i < declarations.length; i += 1) {
    const line = declarations[i].trim();

    if (line === '') {
      continue;
    }

    const colonIndex = line.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();

    if (key === '' || value === '') {
      continue;
    }

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;

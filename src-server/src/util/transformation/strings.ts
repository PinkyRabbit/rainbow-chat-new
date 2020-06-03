export const sanitizeString = value => {
  if (typeof value !== 'string') {
    return value;
  }

  return value
    .replace(/%%\d+%%/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

export const sanitizeStringsArray = stringArray => {
  if (!Array.isArray(stringArray)) {
    return stringArray;
  }
  return stringArray.map(str => sanitizeString(str));
};

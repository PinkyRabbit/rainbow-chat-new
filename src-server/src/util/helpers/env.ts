export const hParseInt = (value, defaultInt: number) => {
  if (typeof value === 'string') {
    value = parseInt(value, 10);
  }
  if (Number.isInteger(value)) {
    return value || defaultInt;
  }
  return defaultInt;
};

export const hParseBoolean = value => {
  if (value === true) {
    return true;
  }
  if (typeof value === 'string') {
    return value.trim() === 'true';
  }
  return false;
};

export const hParseString = (value, defaultString = null) => {
  if (typeof value === 'string') {
    return value;
  }
  if (defaultString) {
    return defaultString;
  }

  value = `${value}`.trim();
  if (!value) {
    console.log('Environment variable missing!');
    process.exit(1);
  }

  return value;
};

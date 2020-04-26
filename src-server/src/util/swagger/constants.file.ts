export const swFile = {
  type: 'string',
  format: 'binary',
};

export const swSchema = properties => ({
  schema: {
    type: 'object',
    properties,
  },
});

export const swAvatarFull = {
  name: 'avatar-full',
  required: true,
};

export const swAvatarCropped = {
  name: 'avatar-cropped',
  required: true,
};

export const swAvatarMin = {
  name: 'avatar-min',
  required: true,
};

import {
  FileInterceptor,
  FileFieldsInterceptor,
} from '@nestjs/platform-express';
import { BadRequestException } from '@nestjs/common';
import { extname } from 'path';

import { limitKb, limitMb } from './file-limits';
import { imageMimeType } from './mimetypes';

const validateExtensions = (file, confirmedExtensions: string[]) => {
  const extName = extname(file.originalname).replace('.', '');
  const { mimetype } = file;
  const relatedExtensions = imageMimeType[mimetype];
  if (!relatedExtensions || !relatedExtensions.includes(extName)) {
    return new BadRequestException('file.hasWrongFileExtension');
  }
  if (!confirmedExtensions.includes(extName)) {
    return new BadRequestException('file.unsupportedFileExtension');
  }
  return null;
};

/*
export const fiAvatarFull = FileInterceptor('avatar-full', {
  fileFilter: (req, file, cb) => {
    const error = validateExtensions(file, ['png', 'jpg', 'jpeg']);
    const result = !error;
    return cb(error, result);
  },
  limits: limitMb(5),
});

export const fiAvatarCropped = FileInterceptor('avatar-cropped', {
  fileFilter: (req, file, cb) => {
    const error = validateExtensions(file, ['png', 'jpg', 'jpeg']);
    const result = !error;
    return cb(error, result);
  },
  limits: limitMb(1),
});

export const fiAvatarMin = FileInterceptor('avatar-min', {
  fileFilter: (req, file, cb) => {
    const error = validateExtensions(file, ['png', 'jpg', 'jpeg']);
    const result = !error;
    return cb(error, result);
  },
  limits: limitKb(16),
});
*/

const avatarExtensionsList = {
  'avatar-full': ['png', 'jpg', 'jpeg'],
  'avatar-cropped': ['jpg'],
  'avatar-min': ['jpg'],
};

export const fiAvatar = FileFieldsInterceptor(
  [
    { name: 'avatar-full', maxCount: 1 },
    { name: 'avatar-cropped', maxCount: 1 },
    { name: 'avatar-min', maxCount: 1 },
  ],
  {
    fileFilter: (req, file, cb) => {
      const error = validateExtensions(file, ['png', 'jpg', 'jpeg']);
      const result = !error;
      return cb(error, result);
    },
    limits: limitMb(7),
  },
);

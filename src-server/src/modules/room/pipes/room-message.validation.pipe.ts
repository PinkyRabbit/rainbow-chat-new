import { DefaultValidationPipe } from 'pipes/default.validation.pipe';

export class RoomMessageValidationPipe extends DefaultValidationPipe {
  validationPrefix = 'room.message';
}

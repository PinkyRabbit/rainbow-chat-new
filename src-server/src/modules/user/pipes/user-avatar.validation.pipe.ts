import { DefaultValidationPipe } from 'pipes/default.validation.pipe';

export class UserAvatarValidationPipe extends DefaultValidationPipe {
  validationPrefix = 'user.avatar';
}

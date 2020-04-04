import { DefaultValidationPipe } from 'pipes/default.validation.pipe';

export class AuthRegisterValidationPipe extends DefaultValidationPipe {
  validationPrefix = 'auth.register';
}

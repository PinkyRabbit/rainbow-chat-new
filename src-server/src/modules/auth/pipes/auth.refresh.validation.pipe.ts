import { DefaultValidationPipe } from 'pipes/default.validation.pipe';

export class AuthRefreshValidationPipe extends DefaultValidationPipe {
  validationPrefix = 'auth.refresh';
}

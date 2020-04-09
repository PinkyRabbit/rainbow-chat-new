import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // Add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    return super.canActivate(context);
  }

  handleRequest(err, user) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
  /*
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // tslint:disable-next-line
    const result = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    return result;
  }

  handleRequest(err, userId, info) {
    // tslint:disable-next-line
    if (err) {
      throw err;
    }
    if (!userId) {
      throw new UnauthorizedException();
    }

    return userId;
  }
  */
}

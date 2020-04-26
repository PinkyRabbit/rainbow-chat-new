import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, ForbiddenException } from '@nestjs/common';
import { ObjectID } from 'mongodb';

import { jwtConstants } from '../../config/jwt';

type payloadJwt = {
  id: string;
  rememberMe: boolean;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: payloadJwt) {
    if (!ObjectID.isValid(payload.id)) {
      throw new ForbiddenException();
    }
    return new ObjectID(payload.id);
  }
}

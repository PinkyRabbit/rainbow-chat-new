import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ObjectID } from 'mongodb';

import { jwtConstants } from '../../config/jwt';

type payloadJwt = {
  username: string;
  sub: string;
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
    console.log('validate');
    console.log(payload);
    return { _id: new ObjectID(payload.sub), username: payload.username };
  }
}

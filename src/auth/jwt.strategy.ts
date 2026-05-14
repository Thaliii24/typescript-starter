import { Injectable, PayloadTooLargeException } from "@nestjs/common";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import 'dotenv/config';

type JwtPayload = {
    sub: string;
    email: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {

    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: process.env.JWT_SECRET as string,
    });
}

async validate(payload: JwtPayload) {
    return {
        id: payload.sub,
        email: payload.email,
    };
}
}
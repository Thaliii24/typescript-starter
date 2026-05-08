import { IsString } from 'class-validator';

export class LoginDto{
    password(password: any, passwordHash: string) {
        throw new Error("Method not implemented.");
    }
    @IsString()
    email: string;

    @IsString()
    passwod: string;
}
import { IsOptional, IsString } from 'class-validator';

export class RegisterDto{
    password(password: any, arg1: number) {
        throw new Error("Method not implemented.");
    }

    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    email: string;

    @IsString()
    passwod: string;
}
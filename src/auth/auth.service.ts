import { Injectable } from "@nestjs/common"
import { loginUsCase, RegisterUseCase } from "./use-cases"
import { register } from "module"
import { RegisterDto } from "./dto/register.dto"
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService{
constructor(
    private readonly RegisterUseCase: RegisterUseCase,
    private readonly loginUseCase: loginUsCase,
) {}

async register(data: RegisterDto) {
return await this.RegisterUseCase.execute(data);
}

async login(data: LoginDto) {
    return await this.loginUseCase.execute(data);
}

}
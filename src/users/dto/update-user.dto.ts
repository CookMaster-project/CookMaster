import { IsEmail, IsOptional, IsString, Max, Min } from "class-validator";
import { CreateUserRequest } from "../interfaces";
export class UpdateUserDto implements CreateUserRequest {
    @IsString()
    @IsOptional()
    @Min(3)
    first_name: string;

    @IsString()
    @IsOptional()
    @Min(3)
    last_name: string;


    
    @IsString()
    @IsOptional()
    @Min(5)
    username: string;

    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    @Min(4)
    @Max(8)
    password: string;
}

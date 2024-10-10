import { IsEmail, IsNotEmpty, IsOptional, IsString, Max, Min } from "class-validator";
import { CreateUserRequest } from "../interfaces";
export class CreateUserDto implements CreateUserRequest {
    @IsString()
    @IsNotEmpty()
    @Min(3)
    first_name: string;

    @IsString()
    @IsOptional()
    @Min(3)
    last_name: string;


    
    @IsString()
    @IsNotEmpty()
    @Min(5)
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @Min(4)
    @Max(8)
    password: string;


    

}

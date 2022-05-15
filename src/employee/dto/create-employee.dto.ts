import { IsNotEmpty, IsString } from "class-validator";

export class CreateEmployeeDto {

  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public firstName: string

  @IsString()
  @IsNotEmpty()
  public department: string
}

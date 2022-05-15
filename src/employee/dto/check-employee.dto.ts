import { IsNotEmpty, IsOptional } from "class-validator";


export class CheckEmployeeDto {

  @IsNotEmpty()
  public employee_id: number

  @IsOptional()
  public check_in?: Date

  @IsOptional()
  public check_out?: Date

  @IsOptional()
  public comment?: string
}

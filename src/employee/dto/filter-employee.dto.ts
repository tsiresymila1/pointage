import { IsOptional } from "class-validator";

export class FilterEmployeeDto {
  @IsOptional()
  public dateCreated?: Date;
}

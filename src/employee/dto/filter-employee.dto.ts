
import { Optional } from "@nestjs/common";

export class FilterEmployeeDto {
  @Optional()
  public dateCreated?: Date;
}

import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { employeeCheckingProviders, employeeProviders } from "./employee.provider";
import { DatabaseModule } from "../database/database.module";

@Module({
  controllers: [EmployeeController],
  imports: [DatabaseModule],
  providers: [
    ...employeeProviders,
    ...employeeCheckingProviders,
    EmployeeService
  ]
})
export class EmployeeModule {}

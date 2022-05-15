import { Controller, Post, Body, Param, Get } from "@nestjs/common";
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { CheckEmployeeDto } from './dto/check-employee.dto';
import { ApiTags } from "@nestjs/swagger";
import { FilterEmployeeDto } from "./dto/filter-employee.dto";

@ApiTags('Employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Post('/all')
  findAll(@Body() filterEmployeeDto: FilterEmployeeDto) {
    return this.employeeService.findAll(filterEmployeeDto);
  }

  @Get('/check-in/:id')
  checkIn(@Param('id') id: number) {
    const checkData : CheckEmployeeDto = {
      employee_id: id,
      check_in: new Date()
    }
    return this.employeeService.checkIn(checkData)
  }

  @Post('/check-out/:id')
  checkOut(@Param('id') id: number, @Body() check: CheckEmployeeDto) {
    const checkData : CheckEmployeeDto = {
      employee_id: id,
      comment: check.comment,
      check_out: new Date()
    }
    return this.employeeService.checkOut(checkData)
  }

}

import { Inject, Injectable } from "@nestjs/common";
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { CheckEmployeeDto } from './dto/check-employee.dto';
import { Equal, IsNull, Repository } from "typeorm";
import { Employee } from "./entities/employee.entity";
import { FilterEmployeeDto } from "./dto/filter-employee.dto";
import { CheckEmployee } from "./entities/check.entity";
import moment from "moment";

@Injectable()
export class EmployeeService {

  constructor(@Inject('EMPLOYEE_REPOSITORY') private employeeRepository: Repository<Employee>,
              @Inject('EMPLOYEE_CHECK_REPOSITORY') private employeeCheckRepository: Repository<CheckEmployee>) {
  }
  create(createEmployeeDto: CreateEmployeeDto):  Promise<CreateEmployeeDto & Employee> {
    const data = {
      ...createEmployeeDto,
      dateCreated: new Date()
    }
    return this.employeeRepository.save<CreateEmployeeDto>(data);
  }

  async findAll(filterEmployeeDto: FilterEmployeeDto) : Promise<Employee[]>{
    if(filterEmployeeDto.dateCreated){
      return await this.employeeRepository.find({
        where: {
          dateCreated : filterEmployeeDto.dateCreated
        }
      })
    }
    else{
      return await this.employeeRepository.find()
    }
  }

  async checkIn(checkDto: CheckEmployeeDto){
    return this.employeeCheckRepository.save(checkDto)
  }
  async checkOut(checkDto: CheckEmployeeDto){
    const checkEmployee = await this.employeeCheckRepository.findOne({
      where: {
        employee_id: checkDto.employee_id,
        check_out: IsNull()
      }
    })
    if(checkEmployee){
      const duration : number = moment(checkDto.check_out, 'YYYY-MM-DD HH:mm:ss').diff(moment(checkEmployee.check_in,'YYYY-MM-DD HH:mm:ss'), 'hours', ) ?? 0
      return await this.employeeCheckRepository.update({
        employee_id: checkDto.employee_id,
        check_out: IsNull()
      },{
        check_out: checkDto.check_out,
        comment: checkDto.comment,
        duration
      })
    }
    return null
  }
}

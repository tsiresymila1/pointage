import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { DatabaseModule } from "../database/database.module";
import { employeeCheckingProviders, employeeProviders } from "./employee.provider";
import { FilterEmployeeDto } from "./dto/filter-employee.dto";
import { Employee } from "./entities/employee.entity";

describe('EmployeeController', () => {
  let controller: EmployeeController;
  let service: EmployeeService;

  beforeAll(async () => {
    jest.setTimeout(10000);
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
      imports: [DatabaseModule],
      providers: [
        ...employeeProviders,
        ...employeeCheckingProviders,
        EmployeeService
      ]
    }).compile();

    controller = module.get<EmployeeController>(EmployeeController);
    service = module.get<EmployeeService>(EmployeeService);
  });

  it('should return an element of employee', async () => {
    const v = {name: "Test", firstName: "Teste", department: "Teste"}
    const result = {id: 1, ...v };
    jest.spyOn(service, 'create').mockImplementation(() => result as unknown as any);
    const value = await controller.create(result)
    expect(value).toBe(result);
  });

  it('should return an list element of employee', async () => {
    const result = []
    jest.spyOn(service, 'findAll').mockImplementation(() => new Promise(resolve => {
      resolve(result)
    }));
    expect(await controller.findAll({})).toBe(result);
  });

  it('should set check-in date', async () => {
    const result = {
        check_in : new Date()
    }
    jest.spyOn(service, 'checkIn').mockImplementation(() => result as unknown as any);
    expect(await controller.checkIn(1)).toBe(result);
  });

  it('should set checkout date and duration', async () => {
    const result = {
      check_out : new Date(),
      duration: 0
    }
    jest.spyOn(service, 'checkOut').mockImplementation(() => result as unknown as any);
    expect(await controller.checkOut(1, { employee_id: 1, comment: "Test"})).toBe(result);
  });

});

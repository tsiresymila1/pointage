import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { DatabaseModule } from "../database/database.module";
import { employeeCheckingProviders, employeeProviders } from "./employee.provider";
import { FilterEmployeeDto } from "./dto/filter-employee.dto";

describe('EmployeeController', () => {
  let controller: EmployeeController;
  let service: EmployeeService;
  let createEmployeeDto: CreateEmployeeDto
  let filterEmployeeDto: FilterEmployeeDto

  beforeEach(async () => {
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
    createEmployeeDto = new CreateEmployeeDto()
    createEmployeeDto.name = "Test";
    createEmployeeDto.firstName = "Test"
    createEmployeeDto.department= "Test"
    filterEmployeeDto = new FilterEmployeeDto()
  });

  it('should return an element of employee', async () => {
    jest.spyOn(service, 'create').mockImplementation(() => createEmployeeDto as unknown as any);
    expect(await controller.create(createEmployeeDto)).toBe(createEmployeeDto);
  });

  it('should return an list element of employee', async () => {
    jest.spyOn(service, 'findAll').mockImplementation(() => new Promise(resolve => {
      resolve([createEmployeeDto as unknown as any])
    }));
    expect(await controller.findAll(filterEmployeeDto)).toBe([createEmployeeDto]);
  });

});

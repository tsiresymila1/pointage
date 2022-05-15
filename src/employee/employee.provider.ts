import { Connection } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { CheckEmployee } from "./entities/check.entity";

export const employeeProviders = [
  {
    provide: 'EMPLOYEE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Employee),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const employeeCheckingProviders = [
  {
    provide: 'EMPLOYEE_CHECK_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(CheckEmployee),
    inject: ['DATABASE_CONNECTION'],
  },
];

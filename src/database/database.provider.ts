import { createConnection } from "typeorm";
import { Employee } from "../employee/entities/employee.entity";
import { CheckEmployee } from "../employee/entities/check.entity";
require('dotenv').config()
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory:  async () =>  await createConnection({
      type: 'mysql',
      host: process.env.MYSQL_HOST || 'localhost',
      port: 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [
        Employee,
        CheckEmployee
      ],
      synchronize: true,
    }),
  },
];

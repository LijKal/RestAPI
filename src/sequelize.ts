import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const c = config.dev;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": c.username as string,
  "password": c.password,
  "database": c.database as string,
  "host":     c.host,

  dialect: 'postgres',
  storage: ':memory:',
  logging: true,
});


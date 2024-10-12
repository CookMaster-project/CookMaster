import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConfig } from './config';
import { dbConfig } from './config/database.config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Meal, MealModule, User, UsersModule } from './module';
import { AuthModule } from './module/auth';
// import { User } from './module/users/models/user.model';
// import { UsersModule } from './module/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, dbConfig],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        try {
          return {
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'psql',
            database: 'cookmaster',
            // host: config.get('database.host'),
            // port: config.get<number>('database.port'),
            // username: config.get('database.user'),
            // password: config.get('database.password'),
            // database: config.get('database.dbName'),
            models: [Meal, User, ],
            synchronize: true,
            sync: {force: true},
            logging: console.log,
            autoLoadModels: true,
          };
        } catch (error) {
          console.log(error);
        }
      },
    }),
    MealModule,
    UsersModule, AuthModule
  ],
})
export class AppModule {}

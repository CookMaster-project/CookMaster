import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/models/user.model';
import { UsersModule } from './users/users.module';
import { CategoryModule } from './categories/category.module';
import { Category } from './categories/models';
import { ProductModule } from './product';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
  }),
  SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadModels: true,
    sync: {alter: true},
    models: [User,Category],
    synchronize: true

  }),
    UsersModule,
    CategoryModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
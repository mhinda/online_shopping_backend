import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity'
import { AuthModule } from './auth/auth.module';
import { Permission } from './users/entities/permission.entity';
import { Profile, Social } from './users/entities/profile.entity';
import { ShopsModule } from './shops/shops.module';
import { AddressesModule } from './addresses/addresses.module';
import { Address } from './addresses/entities/address.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'online_store_manager',
      entities: [
        User,
        Permission,
        Profile,
        Social,
        Address
      ],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ShopsModule,
    AddressesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

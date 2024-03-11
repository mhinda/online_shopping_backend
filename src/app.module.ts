import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity'
import { AuthModule } from './auth/auth.module';
import { Permission } from './users/entities/permission.entity';
import { Profile } from './users/entities/profile.entity';
import { ShopsModule } from './shops/shops.module';
import { AddressesModule } from './addresses/addresses.module';
import { Address } from './addresses/entities/address.entity';
import { Shop } from './shops/entities/shop.entity';
import { Social } from './common/entities/social.entity';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';

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
        Shop,
        User,
        Permission,
        Profile,
        Social,
        Address,
        
      ],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ShopsModule,
    AddressesModule,
    CategoriesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

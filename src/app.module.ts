import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOption } from 'db/data-source';
import { UsersModule } from './users/users.module';
import { ShopModule } from './shop/shop.module';
import { CloudinaryProvider } from './cloudinary/cloudinary.provider';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOption),
    UsersModule,
    ShopModule,
    CloudinaryModule,
    ProductsModule,
    CartsModule,
  ],
  controllers: [],
  providers: [CloudinaryProvider, CloudinaryService],
})
export class AppModule {}

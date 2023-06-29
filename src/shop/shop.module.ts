import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopEntity } from './entities/shop.entity';
import { UsersModule } from 'src/users/users.module';
//import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([ShopEntity]), UsersModule],
  controllers: [ShopController],
  providers: [ShopService, CloudinaryService],
})
export class ShopModule {}

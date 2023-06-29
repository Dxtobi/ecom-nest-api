import { Inject, Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { InjectRepository } from '@nestjs/typeorm';
// import { UserEntity } from 'src/users/entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ShopEntity } from './entities/shop.entity';
import { UsersService } from 'src/users/users.service';
import { Roles } from 'src/utils/common/users-roles.enum';
// import { throwError } from 'rxjs';
// import { error } from 'console';

@Injectable()
export class ShopService {
  constructor(
    private cloudinary: CloudinaryService,
    @InjectRepository(ShopEntity)
    private shopRepository: Repository<ShopEntity>,
    @Inject(UsersService)
    private readonly userService: UsersService,
  ) {}

  //CREATE NEW SHOP
  async create(
    createShopDto: CreateShopDto,
    userObj: any,
  ): Promise<
    | {
        error: string;
        newShop?: undefined;
        update?: undefined;
      }
    | {
        newShop: ShopEntity;
        update: UpdateResult;
        error?: undefined;
      }
  > {
    //CONFIRM IS USER ALREADY OWNS A SHOP
    const user = await this.userService.findOne(userObj.id);
    if (user.roles[0] === Roles.SHOP)
      return { error: 'you already own a shop' };
    //IF USER DON'T HAVE A SHOP MAKE THEM  ONE
    user.roles = [Roles.SHOP];
    createShopDto.user = user;
    let newShop = this.shopRepository.create(createShopDto);
    newShop = await this.shopRepository.save(newShop);
    const update = await this.userService.update(userObj.id, user);
    return { newShop, update };
  }

  //FIND ALL
  async findAll(): Promise<ShopEntity[]> {
    const all = await this.shopRepository.find();
    return all;
  }

  // FIND ONE
  async findOne(id: number): Promise<ShopEntity> {
    return await this.shopRepository.findOneBy({ id: id });
  }

  //UPDATE SHOP
  async update(
    id: number,
    updateShopDto: UpdateShopDto,
    file: Express.Multer.File,
    user: { id: number },
  ): Promise<UpdateResult> {
    const existingShop = await this.shopRepository.findOneBy({ id });
    if (existingShop.user.id !== user.id) throw Error('You cant do this');
    const shop_banner = await this.cloudinary.uploadImage(file);
    if (shop_banner.secure_url)
      updateShopDto.shop_banner = shop_banner.secure_url;
    const updated = await this.shopRepository.update(id, updateShopDto);
    return updated;
  }

  //DELETE SHOP
  async remove(id: number): Promise<DeleteResult> {
    return await this.shopRepository.delete({ id: id });
  }
}

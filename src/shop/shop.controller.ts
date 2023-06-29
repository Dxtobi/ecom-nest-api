import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  Req,
  UploadedFile,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { FileInterceptor } from '@nestjs/platform-express';
//import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';
import { RolesGuard } from 'src/auth/guards/role/role.guard';
import { Roles as Role } from 'src/utils/common/users-roles.enum';
import { Roles } from 'src/auth/decorators/role/role.decorator';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @UseGuards(AuthGuard)
  @Post('new')
  async create(@Body() createShopDto: CreateShopDto, @Req() req) {
    try {
      return this.shopService.create(createShopDto, req?.user);
    } catch (error) {
      console.log('Error:', error.response);
      return error.response;
    }
  }

  // @Roles(Role.ADMIN)
  //@UseGuards(AuthGuard, RolesGuard)
  @Get('all')
  async findAll() {
    return this.shopService.findAll();
  }

  //@Roles(Role.ADMIN)
  //@UseGuards(AuthGuard, RolesGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.shopService.findOne(+id);
  }

  @Roles(Role.ADMIN, Role.SHOP)
  @UseGuards(AuthGuard, RolesGuard)
  @UseInterceptors(FileInterceptor('file'))
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateShopDto: UpdateShopDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Req() req,
  ) {
    try {
      //console.log(updateShopDto);
      return this.shopService.update(+id, updateShopDto, file, req?.user);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Roles(Role.ADMIN, Role.SHOP)
  @UseGuards(AuthGuard, RolesGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.shopService.remove(+id);
  }
}

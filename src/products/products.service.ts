import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  async create(createProductDto: CreateProductDto, file: Express.Multer.File) {
    console.log(createProductDto, file);
    return 'This action adds a new product';
  }

  async findAll() {
    return `This action returns all products`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
    file: Express.Multer.File,
  ) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return `This action removes a #${id} product`;
  }
}

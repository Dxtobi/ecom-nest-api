import { IsNotEmpty, MinLength, IsArray } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'product name this is required' })
  name: string;

  @IsNotEmpty({ message: 'description is required' })
  @MinLength(5, { message: 'minimum character should be 5 for description' })
  description: string;

  shop: object;

  @IsNotEmpty()
  price: string;

  @IsArray({ message: 'sizes are required' })
  sizes: string[];

  @IsArray({ message: 'colors are required' })
  colors: string[];

  @IsArray({ message: 'images are required' })
  images: string[];

  @IsArray({ message: 'categories is required' })
  categories: string[];
}

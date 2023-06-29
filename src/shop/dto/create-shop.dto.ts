import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateShopDto {
  @IsNotEmpty({ message: 'store name this is required' })
  name: string;

  @IsNotEmpty({ message: 'description is required' })
  @MinLength(5, { message: 'minimum character should be 5 for description' })
  description: string;

  @IsNotEmpty({ message: 'contact is required' })
  contact: string;

  location: string;

  user: object;

  shop_banner: string;
}

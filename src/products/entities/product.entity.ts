import { ShopEntity } from 'src/shop/entities/shop.entity';
import { ManyToOne } from 'typeorm';

import {
  Timestamp,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
} from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ShopEntity, (shop) => shop.products)
  shop: ShopEntity;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: string;

  @Column('simple-array')
  sizes: string[];

  @Column('simple-array')
  colors: string[];

  @Column('simple-array')
  images: string[];

  @Column('simple-array')
  categories: string[];

  @CreateDateColumn()
  createdAt: Timestamp;

  @UpdateDateColumn()
  updatedAt: Timestamp;
}

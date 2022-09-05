import { ProductSale } from '@prisma/client';
import { Avaluation } from 'src/resources/avaluations/entities/avaluation.entity';
import { uuid } from 'uuidv4';

export class Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  avaluations?: Avaluation[];
  productSale?: ProductSale[];
}

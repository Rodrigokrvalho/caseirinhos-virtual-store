import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private productsRepository: Prisma.ProductDelegate<Product>;

  constructor(prisma: PrismaService) {
    this.productsRepository = prisma.product;
  }

  create(data: CreateProductDto) {
    return this.productsRepository.create({ data });
  }

  findAll() {
    return this.productsRepository.findMany();
  }

  findOne(id: string) {
    return this.productsRepository.findUniqueOrThrow({ where: { id } });
  }

  update(id: string, data: UpdateProductDto) {
    return this.productsRepository.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.productsRepository.delete({ where: { id } });
  }
}

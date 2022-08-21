import { Injectable } from '@nestjs/common';
import { Prisma, Sales } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Injectable()
export class SalesService {
  private readonly salesRepository: Prisma.SalesDelegate<Sales>;

  constructor(prisma: PrismaService) {
    this.salesRepository = prisma.sales;
  }

  create(data: CreateSaleDto) {
    return this.salesRepository.create({ data });
  }

  findAll() {
    return this.salesRepository.findMany({
      select: { amount: true, product: true },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} sale`;
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a #${id} sale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sale`;
  }
}

import { Injectable } from '@nestjs/common';
import { Prisma, Sale } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Injectable()
export class SalesService {
  private readonly salesRepository: Prisma.SaleDelegate<Sale>;

  constructor(prisma: PrismaService) {
    this.salesRepository = prisma.sale;
  }

  create({ buyerAddress, buyerName, productId }: CreateSaleDto) {
    const products = productId.map((product) => {
      return { id: product.id, amount: product.amount };
    });

    return this.salesRepository.create({
      data: {
        buyerName,
        buyerAddress,
        productSale: {
          create: products.map((product) => {
            return {
              amount: product.amount,
              product: {
                connect: { id: product.id },
              },
            };
          }),
        },
      },
    });
  }

  findAll() {
    const select = {
      buyerAddress: true,
      buyerName: true,
      productSale: true,
    };

    return this.salesRepository.findMany({
      select,
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

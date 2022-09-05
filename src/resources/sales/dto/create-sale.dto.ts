export class CreateSaleDto {
  buyerName: string;
  buyerAddress: string;
  productId: ProductInfo[];
}

interface ProductInfo {
  id: string;
  amount: number;
}

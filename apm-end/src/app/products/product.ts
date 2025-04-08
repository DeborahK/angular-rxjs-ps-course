/* Defines the product */
export interface Product {
  id: number;
  productName: string;
  description: string;
  price: number;
  categoryId: number;
  category?: string;
  supplierIds?: number[];
}
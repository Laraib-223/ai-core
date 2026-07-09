import { products } from "../data/products";

export function searchProducts(query: string) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
}
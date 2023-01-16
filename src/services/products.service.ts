import { IProduct } from '../components/definitions';
import { http } from "./http.service";

export class ProductsService {
  public static async saveProducts(products: IProduct[]): Promise<any> {
    return await http.put<any>('/products/save', products);
  };
}
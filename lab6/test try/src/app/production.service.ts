import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  productsList: Product[] = [
    {
      id: 0,
      name: "Смартфон Apple iPhone 16 128Gb черный",
      description: "(311 отзывов)",
      rating: 4.9,
      link: "https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000",
      photo: `/iphone16.jpg`,
      likes: 0,
    }, 
    {
      id: 1,
      name: "Смартфон Apple iPhone 13 128Gb черный",
      description: "(3108 отзывов)",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
      photo: `/iphone13.jpg`,
      likes: 0,
    }, 
    {
      id: 2,
      name: "Смартфон Apple iPhone 16 Pro Max 256Gb серебристый",
      description: "(358 отзывов)",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000",
      photo: `/16promax.jpg`,
      likes: 0,
    }, 
    {
      id: 3,
      name: "Смартфон Apple iPhone 13 128Gb синий",
      description: "(1691 отзывов)",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000",
      photo: `/iph13.jpg`,
      likes: 0,
    }, 
    {
      id: 4,
      name: "Смартфон Apple iPhone 15 128Gb черный",
      description: "(2468 отзывов)",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000",
      photo: `/iphone_.png`,
      likes: 0,
    }, 
    {
      id: 5,
      name: "Смартфон Samsung Galaxy A06 6 ГБ/128 ГБ черный",
      description: "(98 отзывов)",
      rating: 5,
      link: "https://kaspi.kz/shop/p/samsung-galaxy-a06-6-gb-128-gb-chernyi-123429834/?c=750000000",
      photo: `/a06.jpg`,
      likes: 0,
    }, 
    {
      id: 6,
      name: "Смартфон Apple iPhone 15 128Gb голубой",
      description: "(759 отзывов)",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000",
      photo: `/iph15.png`,
      likes: 0,
    }, 
    {
      id: 7,
      name: "Чехол Для Apple iPhone 11 прозрачный",
      description: "(657 отзывов)",
      rating: 5,
      link: "https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-106882555/?c=750000000",
      photo: `/iph13.jpg`,
      likes: 0,
    }, 
    {
      id: 8,
      name: "Смартфон Apple iPhone 13 128Gb синий",
      description: "(1691 отзывов)",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000",
      photo: `/case.png`,
      likes: 0,
    }, 
    {
      id: 9,
      name: "Смартфон Realme Note 50 3 ГБ/64 ГБ черный",
      description: "(789 отзывов)",
      rating: 5,
      link: "https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000",
      photo: `/realme.png`,
      likes: 0,
    }, 
  ];

  getAllProducts(): Product[] {
    return this.productsList;
  }
  getProductById(id: number): Product | undefined {
    return this.productsList.find((product) => product.id === id);
  }

  constructor() { }
}

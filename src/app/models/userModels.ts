export interface  Product {
    id: string | null; // id có thể là string hoặc null
    name: string;
    manufacturer: string;
    type: string;
    seri: number;
    img: string | null; // img có thể là string hoặc null
  }
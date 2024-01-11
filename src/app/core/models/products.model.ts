export interface ProductResponse {
    limit: number,
    skip: number,
    total: number,
    products: Product[]
}

export interface Product {
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    id: number,
    images: string[],
    price: number,
    rating: number,
    stock: number,
    thumbnail: string,
    title: string,
    quantity: number
}

export enum cartChangeType {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
}
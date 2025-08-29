
export interface IProduct {
    id: number;
    name: string;
    category: string;
    image: string;
    rating: number;
    price: number;
    description: string;
}


export const products: IProduct[] = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        image: "products/i-1.jpg",
        rating: 3,
        price: 59.99,
        description: "Comfortable over-ear headphones with noise cancellation."
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        image: "products/i-2.jpg",
        rating: 5,
        price: 120.00,
        description: "Track fitness, heart rate, and receive notifications."
    },
    {
        id: 3,
        name: "Running Shoes",
        category: "Fashion",
        image: "products/i-3.jpg",
        rating: 1,
        price: 75.49,
        description: "Lightweight and durable running shoes for all terrains."
    },
    {
        id: 4,
        name: "Backpack",
        category: "Accessories",
        image: "products/i-4.jpg",
        rating: 2,
        price: 45.00,
        description: "Spacious backpack with multiple compartments."
    },
    {
        id: 5,
        name: "Gaming Keyboard",
        category: "Electronics",
        image: "products/i-5.jpg",
        rating: 3,
        price: 89.99,
        description: "Mechanical keyboard with RGB backlighting."
    },
    {
        id: 6,
        name: "Coffee Maker",
        category: "Home Appliances",
        image: "products/i-6.jpg",
        rating: 4,
        price: 39.95,
        description: "Brew fresh coffee quickly with this compact machine."
    },
    {
        id: 7,
        name: "Desk Lamp",
        category: "Home Decor",
        image: "products/i-7.jpg",
        rating: 4,
        price: 25.99,
        description: "Adjustable LED lamp with touch controls."
    },
    {
        id: 8,
        name: "Yoga Mat",
        category: "Fitness",
        image: "products/i-8.jpg",
        rating: 4,
        price: 20.50,
        description: "Non-slip mat for yoga, pilates, and stretching."
    },
    {
        id: 9,
        name: "Bluetooth Speaker",
        category: "Electronics",
        image: "products/i-9.jpg",
        rating: 4,
        price: 49.99,
        description: "Portable speaker with deep bass and long battery life."
    },
    {
        id: 10,
        name: "Sunglasses",
        category: "Fashion",
        image: "products/i-10.jpg",
        rating: 4,
        price: 15.75,
        description: "Stylish UV-protected sunglasses for outdoor use."
    }
];

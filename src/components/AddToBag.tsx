"use client"

import { urlFor } from '@/sanity/lib/image';
import { Button } from './ui/button';
import { useShoppingCart } from 'use-shopping-cart';

export interface ProductCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: string;
    price_id: string;
}

export default function AddToBag({
    name, 
    description, 
    price, 
    currency, 
    image,
    price_id,
}: ProductCart) {
    const { addItem, handleCartClick } = useShoppingCart();

    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id,
    };
  return (
    <Button onClick={() => {
        addItem(product), handleCartClick();
    }}>
        Add To Cart
    </Button>
  )
}
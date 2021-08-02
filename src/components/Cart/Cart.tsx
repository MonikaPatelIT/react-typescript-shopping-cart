import { Wrapper } from "./Cart.styles";

import CartItem from "../CartItem/CartItem";

import { CartItemType } from "../../App";
import React from "react";

type Props = {

    cartItems: CartItemType[];
    addToCart: (clickToAdd: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotal = (items: CartItemType[]) => {
        return items.reduce((acc: number, item) => acc + item.price * item.amount, 0)
    }
    return <Wrapper>
        <h2>Your shopping cart</h2>
        {cartItems.length === 0 && <p>No items in your cart.</p>}
        {cartItems?.map(item => <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />)}
        <h2>Total : ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>;
}

export default Cart;
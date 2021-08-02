//components
import Button from "@material-ui/core/Button"
import React from "react";

// types
import { CartItemType } from "../../App";

//styles
import { Wrapper } from "./CartItem.styles";


type Props = {

    item: CartItemType;
    addToCart: (clickToAdd: CartItemType) => void;
    removeFromCart: (id: number) => void;
}
const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => <Wrapper>
    <div>
        <h3>{item.title}</h3>
        <div className="information">
            <p>Price: ${item.price}</p>
            <p>Total : ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
            <Button size="small" disableElevation variant='contained'
                onClick={() => removeFromCart(item.id)} > - </Button>
            <span>{item.amount}</span>
            <Button size="small" disableElevation variant='contained'
                onClick={() => addToCart(item)} > + </Button>
        </div>
    </div>
    <img src={item.image} alt={item.title} />
</Wrapper>
export default CartItem
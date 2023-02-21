import { createContext, useState } from 'react'

export const CartContext = createContext([])

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([])     
    function addToCart (item, quantity){
        const index = cartList.findIndex(i => i.item.id === item.id) 
        if ( index > -1 ) {
            const oldQy = cartList[index].quantity
            cartList.splice(index, 1)
            setCartList([...cartList, { item, quantity: quantity + oldQy}])
        } else { 
            setCartList([...cartList, {item, quantity}])
        }
    }
    function clearCart(){ 
        setCartList([])
    }
    function removeFromCart(id){
        setCartList(cartList.filter(products => products.item.id !== id ))
    }    
    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            removeFromCart
        }}> {children}
        </CartContext.Provider>      
    )
}

export default CartContextProvider
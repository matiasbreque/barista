import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import {CartContext}  from '../Cart/CartContext'

function ItemDetail({products}){
    const [option, setOption] = useState(true)
    const {addToCart} = useContext(CartContext)
    function onAdd (quantity){
        setOption(false)
        addToCart(products, quantity)
    }
    return(
        <div>       
        <>    
        <div style={{border:"4px solid yellow",padding:"20px"}}>
            <h1 key={products.id}>{products.title}</h1>
            <h2>Detalles del Producto</h2><p>{products.detail}</p>
            <h3>${products.price}</h3>
            <img src={products.img} style={{width:"auto",height:"150px"}}/>
            <h4>Categoría: {products.category}</h4>
        </div>
        {option
            ? <ItemCount onAdd={onAdd} />
            : <Link to="/cart"> ¡Agregado! ver carrito </Link>
        }
        </>
        </div>
    )
}

export default ItemDetail
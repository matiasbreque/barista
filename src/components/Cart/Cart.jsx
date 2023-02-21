import { useContext, useState } from "react"
import { CartContext } from "../Cart/CartContext"
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

function Cart(){
    const order = {}
    const db = getFirestore() 
    const [orderId, setOrderId] = useState('') 
    const inputInitialBuyer = {name:'',phone:'',email:'',confirmEmail:'',items:[''],id:''}
    const [buyer, setBuyer] = useState(inputInitialBuyer)
    const {cartList,clearCart,removeFromCart}=useContext(CartContext) 
    const condition = cartList.length === 0 ;
    const finalPrice = cartList.map((prod) => Number(prod.item.price * prod.quantity)) .reduce((a, b) => a + b, 0); 
    const handleInputs = (e) => {
        e.preventDefault()
        setBuyer({ ...buyer, [e.target.name]: e.target.value }, {})  
    }
    const generateOrder = async (e) => {        
        e.preventDefault()
        order.buyer = buyer
        if (order.buyer.email !== order.buyer.confirmEmail){
            alert("ERROR:\n\nConfirme su mail")
        }else{
            const orderCollection = collection(db, 'orders') 
            await addDoc(orderCollection, order)
                .then(resp => setOrderId(resp.id))
                .catch(err => console.log(err)) 
                .finally(()=> { clearCart(); setBuyer(inputInitialBuyer); }) 
            order.total = finalPrice
            order.buyer.items = cartList.map(prod => {
                const id = prod.id
                const name = prod.item.title
                const price = prod.item.price * prod.quantity
                return {id, name, price}
            })
        }
    }
    return(
        <div>
            {condition ?
                <div><>
                    <div><>
                        <div>{ orderId &&
                            <div>
                                <h1>Compra Finalizada</h1>
                                <p>tu ID</p><p>{orderId}</p>
                                <Link to="/"><button style={{ width: "300px" }}>Volver al Home</button></Link>
                            </div>
                        }
                        {!orderId &&
                            <div><>
                                <h1>Carrito vacío</h1>
                                <p>¡Volvé al home para agregar productos!</p>
                                <Link to="/"><button style={{ width: "300px" }}>Seguir comprando</button></Link></>
                            </div>
                        }
                        </div></>
                    </div></>
                </div>
                :
                <div>
                    <h1 style={{height:"50px"}}>Tu carrito de compras</h1>
                    <div style={{display:"flex",justifyContent:"space-evenly",width:"1200px"}}>   
                        <h3 style={{width:"20%",height:"90px"}}>Producto</h3>
                        <h3 style={{width:"20%",height:"90px"}}>Cantidad</h3>
                        <h3 style={{width:"20%",height:"90px"}}>Precio por Unidad</h3>
                        <h3 style={{width:"20%",height:"90px"}}>Subtotal</h3>
                        <h3 style={{width:"20%",height:"90px"}}>Quitar</h3>
                    </div>
                    {cartList.map(prod=> <>
                        <div style={{ display: "flex", justifyContent: "space-evenly", width: "1200px" }}>
                            <h3 style={{ width: "20%", height: "90px" }}>{prod.item.title}</h3>
                            <h3 style={{ width: "20%", height: "90px" }}>{prod.quantity}</h3>
                            <h3 style={{ width: "20%", height: "90px" }}>${prod.item.price}</h3>
                            <h3 style={{ width: "20%", height: "90px" }}>${parseInt(prod.item.price) * parseInt(prod.quantity)}</h3>
                            <h3 style={{ width: "20%", height: "90px" }}><button id={prod.id} onClick={() => removeFromCart(prod.item.id)}>X</button></h3>
                        </div></>
                    )}
                    <h3 style={{ height: "50px" }}>Total a pagar: $ {finalPrice}</h3> 
                    <button onClick={clearCart} style={{width:"300px"}}>Vaciar Carrito</button>
                    <Link to="/"><button style={{width:"300px"}} >Seguir comprando</button></Link><hr/>
                    <div>
                        <form method='POST' onSubmit={generateOrder}>
                            <h4>Para generar su order <br /> complete el siguiente formulario</h4>
                            <input type="text" name='name' placeholder='Nombre y Apellido' onChange={handleInputs} /> <br />
                            <input type="text" name='phone' placeholder='Teléfono' onChange={handleInputs}/> <br />
                            <input type="email" name='email' placeholder='Email' onChange={handleInputs}/> <br />
                            <input type="email" name='confirmEmail' placeholder='Confirme su Email' onChange={handleInputs}/> <br />
                            <button>Generar Orden</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart
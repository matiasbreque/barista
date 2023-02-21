import { useState } from 'react'

function ItemCount({onAdd}){
    const [ contador, setContador ] = useState(1)
    const handlerClickSuma = ()=>{
        setContador(contador+1)
    }
    const handlerClickResta = ()=>{
        setContador(contador-1)
    }
    return(
        <div>
            <p>Cantidad: {contador}</p>
            <button type="button" class="btn btn-secondary" onClick={handlerClickResta} style={{width: "45px"}}>-</button>    
            <button type="button" class="btn btn-secondary" onClick={handlerClickSuma}  style={{width: "45px"}}>+</button>
            <button type="button" class="btn btn-primary"   onClick={()=>onAdd(contador)}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount

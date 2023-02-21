import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getDoc, doc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer(){
    const [products, setProducts] = useState ({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    //console.log(id)
    useEffect(()=>{   
        const db = getFirestore()
        const queryDb = doc(db, 'products', id)
        getDoc(queryDb)        
        .then(resp => setProducts({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))   
    }, [id])
    return(
        <> <div> {loading ?
        <h2>Cargando Detalle...</h2> : 
        <ItemDetail products={products}/>}</div></>
    )
}   
export default ItemDetailContainer

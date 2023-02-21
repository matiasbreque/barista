import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemListContainer/ItemList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

function ItemListContainer({greeting}){
    
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)
    const {idCate} = useParams()
    
    useEffect(()=>{

        const db = getFirestore()
        const queryCollection = idCate ?
            query(collection(db, 'products'), where('category', '==', idCate))
        :
            query(collection(db, 'products'))
        getDocs(queryCollection)
        .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        
    },[idCate])
    
    return (
        <div>
            {greeting} {loading ? <h2>Cargando...</h2> : <ItemList products={products}/> }
        </div>
    )
}

export default ItemListContainer




























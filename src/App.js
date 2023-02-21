import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer'
import Cart from '../src/components/Cart/Cart'
import CartContextProvider from '../src/components/Cart/CartContext'

function App() {
	return (
		<CartContextProvider>
			<BrowserRouter>
			<div className="App">
				<header className="App-header"> 
					<NavBar />
					<Routes>
						<Route exact path="/" element={<ItemListContainer saludo='Hola soy el ILC'/>}/>
						<Route exact path="/category/:idCate" element={<ItemListContainer saludo='Hola soy el ILC'/>}/>
						<Route exact path="/detalle/:id" element={<ItemDetailContainer saludo='ILC'/>}/>
						<Route exact path="/cart" element={<Cart saludo='carrito'/>}/>
					</Routes>
				</header>
			</div>
			</BrowserRouter>
		</CartContextProvider>
	)
}

export default App

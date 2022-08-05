import axios from "axios";
import React, {useState, useEffect} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Card from "./components/card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Home from './pages/Home'

function App() {  
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const [favorites, setFavorites] = useState([])

  const onAddToFavorite = (obj) => {
    axios.post('https://62e9b9b201787ec7121bbb69.mockapi.io/favorite', obj)
    setFavorites((prev) => [...prev, obj])
  }

  useEffect(() => {
    axios.get('https://62e9b9b201787ec7121bbb69.mockapi.io/items').then(res => {
      setItems(res.data)
    })
    axios.get('https://62e9b9b201787ec7121bbb69.mockapi.io/cart').then(res => {
      setCartItems(res.data)
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://62e9b9b201787ec7121bbb69.mockapi.io/cart', obj)
    setCartItems([...cartItems, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62e9b9b201787ec7121bbb69.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item)=> item.id != id))
  }

  const [searchValue, setSearchValue] = useState('')
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }
  console.log(searchValue)

  return (<div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
      <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
            <Route path="/" element={<Home 
              items={items} 
              searchValue={searchValue} 
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            /> }/>

            <Route path='favorites' element={<Favorites items={favorites} onFavorite={onAddToFavorite}/>}/>
        </Routes>
    </div>
   );
}

export default App;

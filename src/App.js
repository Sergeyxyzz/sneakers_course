import React, {useState, useEffect} from "react";
import Card from "./components/card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {  
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    fetch('https://62e9b9b201787ec7121bbb69.mockapi.io/items').then(res => {
      return res.json()
    })
    .then((json) => {
      setItems(json)
    })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj])
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="img/search.png" alt="search" height={'40px'}/>
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map(it => {
            return <Card 
            title={it.title} 
            price={it.price} 
            imageUrl={it.imageUrl} 
            onFavorite={() => console.log('Добавили в закладки')}
            onPlus={(obj) => onAddToCart(obj)} 
            />
          })}
      </div> 
      </div>
    </div>
  );
}

export default App;

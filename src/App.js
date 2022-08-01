function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">Корзина <img src="img/btn-remove.png" alt="remove" height={'30px'} className='cu-p'/></h2>
          
          <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div style={{backgroundImage: 'url(img/sneakers/1.jpg)'}} className="cartItemImg">
            </div>
            <div className="mr-20">
              <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
              <b>12 999р.</b>
            </div>
            <img className="removeBtn" src="img/btn-remove.png" alt="remove" width={'20px'}/>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div style={{backgroundImage: 'url(img/sneakers/2.jpg)'}} className="cartItemImg">
            </div>
            <div className="mr-20">
              <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
              <b>12 999р.</b>
            </div>
            <img className="removeBtn" src="img/btn-remove.png" alt="remove" width={'20px'}/>
          </div>


          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Итого: </span>
                <div></div>
                <b>21 498р.</b>
              </li>
              <li className="d-flex">
                <span>Налог 5%:</span>
                <div></div>
                <b>1 074р.</b>
              </li>
            </ul>
            <button className="greenButton">Оформить заказ <img src="img/arrow.png" alt="Arrow" className="arrow"/></button>
          </div>
          </div>
        </div>
      </div>


      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="img/logo.png" alt="sneakers logo" width={'40px'} />
          <div>
            <h3 className="text-uppercase">React Sneackers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="img/cart.png" alt="cart" width={'18px'} />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="img/user.png" alt="user" width={'18px'} />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="img/search.png" alt="search" height={'40px'}/>
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
        <div className="card">
          <div className="favorite">
            <img src="img/heartUnliked.png" alt="unliked" width={'20px'}/>
          </div>
          <img src="img/sneakers/1.jpg" alt="sneakers1" width={'133px'} height={'112px'} />
          <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена: </span>
              <b>12 999руб.</b>
            </div>
            <button className="button"><img src="img/plus.png" alt="plus" width={'11px'} /></button>
          </div>
        </div>
        <div className="card">
          <img src="img/sneakers/2.jpg" alt="sneakers1" width={'133px'} height={'112px'} />
          <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена: </span>
              <b>12 999руб.</b>
            </div>
            <button className="button"><img src="img/plus.png" alt="plus" width={'11px'} /></button>
          </div>
        </div>
        <div className="card">
          <img src="img/sneakers/3.jpg" alt="sneakers1" width={'133px'} height={'112px'} />
          <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена: </span>
              <b>12 999руб.</b>
            </div>
            <button className="button"><img src="img/plus.png" alt="plus" width={'11px'} /></button>
          </div>
        </div>
        <div className="card">
          <img src="img/sneakers/4.jpg" alt="sneakers1" width={'133px'} height={'112px'} />
          <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена: </span>
              <b>12 999руб.</b>
            </div>
            <button className="button"><img src="img/plus.png" alt="plus" width={'11px'} /></button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;

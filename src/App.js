function App() {
  return (
    <div className="wrapper clear">
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
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
        <div className="card">
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

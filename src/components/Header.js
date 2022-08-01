const Header = () => {
    return (
    <>
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
    </>
    )
}

export default Header
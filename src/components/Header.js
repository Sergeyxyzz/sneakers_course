import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
    <>
        <header className="d-flex justify-between align-center p-40">
        <Link to='/'>
        <div className="d-flex align-center">
            <img src="img/logo.png" alt="sneakers logo" width={'40px'} />
          <div>
            <h3 className="text-uppercase">React Sneackers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img src="img/cart.png" alt="cart" width={'18px'} />
            <span>1205 руб.</span>
          </li>
          <li>
            <Link to='favorites'>
              <img src="img/heartUnliked.png" className="cu-p mr-20" alt="Закладки" width={'18px'} />
            </Link>
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
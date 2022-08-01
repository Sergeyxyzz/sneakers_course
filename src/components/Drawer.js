const Drawer = () => {
    return (<div className="overlay" style={{display : 'none'}}>
          <div  className="drawer">
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
      </div>)
}

export default Drawer
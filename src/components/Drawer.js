function Drawer ({onClose, items=[]}) {
    return (<div className="overlay">
          <div  className="drawer">
          <h2 className="d-flex justify-between mb-30">Корзина <img src="img/btn-remove.png" alt="remove" height={'30px'} className='cu-p' onClick={onClose}/></h2>

          <div className="items">

          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"></div>

              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.png" alt="Remove" width={'20px'}/>
            </div> 
            ))}
          
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
        </div>)
}

export default Drawer
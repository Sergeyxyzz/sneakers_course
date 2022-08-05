function Drawer ({onClose, onRemove, items=[]}) {
    return (<div className="overlay">
          <div  className="drawer">
          <h2 className="d-flex justify-between mb-30">Корзина <img src="img/btn-remove.png" alt="remove" height={'30px'} className='cu-p' onClick={onClose}/></h2>

          {
            items.length > 0 ? <div className="items">

            {items.map((obj) => (
              <div className="cartItem d-flex align-center mb-20">
                <div
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  className="cartItemImg"></div>
  
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.png" alt="Remove" width={'20px'}/>
              </div> 
              ))}
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

            : 
            
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width={'120px'} height={'120px'} src="img/emptyCart.png" alt="Пустая корзина" />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">Добавьте хотябы одну пару кроссовок, чтобы оформить заказ</p>
            <button onClick={onClose} className="greenButton">
              <img src="img/arrow.png" alt="стрелочка" />
              Вернуться назад
            </button>
          </div>
          }
          </div>
        </div>)
}

export default Drawer
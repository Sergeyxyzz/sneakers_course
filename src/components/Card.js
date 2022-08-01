const Card = () => {
    return (
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
    )
}

export default Card
const Card = (props) => {
  console.log(props)
    return (
        <div className="card">
          <div className="favorite">
            <img src="img/heartUnliked.png" alt="unliked" width={'20px'}/>
          </div>
          <img src={props.imageUrl} alt="sneakers1" width={'133px'} height={'112px'} />
          <h5>{props.title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена: </span>
              <b>{props.price} руб.</b>
            </div>
            <button className="button"><img src="img/plus.png" alt="plus" width={'11px'} /></button>
          </div>
        </div>
    )
}

export default Card
import styles from './Card.module.scss'

console.log(styles)

const Card = (props) => {
    return (
        <div className={styles.card}>
          <div className={styles.favorite}>
            <img src="img/heartUnliked.png" alt="unliked" width={'20px'}/>
          </div>
          <img src={props.imageUrl} alt="sneakers1" width={'133px'} height={'112px'} />
          <h5>{props.title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена: </span>
              <b>{props.price} руб.</b>
            </div>
            <button onClick={props.onClick} className="button"><img src="img/plus.png" alt="plus" width={'11px'} /></button>
          </div> 
        </div>
    )
}

export default Card
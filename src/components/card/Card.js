import React from 'react'
import styles from './Card.module.scss'

console.log(styles)

function Card ({title, imageUrl, price, onFavorite, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false)

    const onClickPlus = () => {
      onPlus({title, imageUrl, price})
      setIsAdded(!isAdded)
    }

    return (
        <div className={styles.card}>
          <div className={styles.favorite}>
            <img src="img/heartUnliked.png" alt="unliked" width={'20px'} onClick={onFavorite}/>
          </div>
          <img src={imageUrl} alt="sneakers1" width={'133px'} height={'112px'} />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена: </span>
              <b>{price} руб.</b>
            </div>
            <img className={styles.plus} src={isAdded ? 'img/btn-checked.png' : 'img/btn-plus.png'} onClick={onClickPlus} alt="plus" width={'25px'} />
          </div> 
        </div>
    )
}

export default Card
import React from 'react'
import styles from './Card.module.scss'

function Card ({id, title, imageUrl, price, onPlus, onFavorite, favorited}) {
    const [isAdded, setIsAdded] = React.useState(false)

    const onClickPlus = () => {
      onPlus({id, title, imageUrl, price})
      setIsAdded(!isAdded)
    }

    const [favorite, setFavorite] = React.useState(favorited)
    const onLike = () => {
      onFavorite({id, title, imageUrl, price})
      setFavorite(!favorite)
    }

    return (
        <div className={styles.card}>{id}
          <div className={styles.favorite}>
            <img src={favorite ? 'img/heartLiked.png' : 'img/heartUnliked.png'} alt="unliked" width={'20px'} onClick={onLike}/>
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
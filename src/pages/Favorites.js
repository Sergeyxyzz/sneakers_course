import Card from "../components/card/Card"

const Favorites = ({items, onAddToFavorite}) => {
    return (<div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Мои закладки</h1>
      </div> 

      <div className="d-flex flex-wrap">
      {items.map((it, index) => {
        return <Card 
        key={index}
        title={it.title} 
        price={it.price} 
        imageUrl={it.imageUrl} 
        favorited={true}
        onFavorite={onAddToFavorite}
        />
      })}
      </div>
    </div>)
}

export default Favorites
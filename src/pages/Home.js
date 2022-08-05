import Card from "../components/card/Card"

const Home = ({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart}) => {
    return (<div className="content p-40">
    <div className="d-flex align-center justify-between mb-40">
      <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Кроссовки'} </h1>
      <div className="search-block d-flex">
        <img src="img/search.png" alt="search" height={'40px'}/>
        {searchValue ? <img src="img/btn-remove.png" onClick={() => setSearchValue('')} className="clear cu-p" alt="Close" /> : null}
        <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
      </div>
    </div>
    <div className="d-flex flex-wrap">
      {items.map((it, index) => {
        return <Card 
        key={index}
        id={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)} 
        {...it}
        />
      })}
  </div> 
  </div>)
}

export default Home
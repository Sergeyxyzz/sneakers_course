import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {
    name: 'Мужские кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: 'img/sneakers/1.jpg'
  },
  {
    name: 'Мужские кроссовки Nike Air Max',
    price: 15600,
    imageUrl: 'img/sneakers/2.jpg'
  },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="img/search.png" alt="search" height={'40px'}/>
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {/* <Card title={'Мужские кроссовки Nike Blazer Mid Suede'} price={'12999'} imageUrl={'img/sneakers/1.jpg'}/>
          <Card title={'Мужские кроссовки Nike Air Max'} price={'15600'} imageUrl={'img/sneakers/2.jpg'}/> */}
          {arr.map(it => {
            return <Card title={it.title} price={it.price} imageUrl={it.imageUrl} />
          })}
      </div> 
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Product from './components/Product';

function App() {

  const initState = [
    {
      id: 1,
      name: 'Product 1',
      price: '120.000 VND',
      image: 'https://m.media-amazon.com/images/I/51pWphyMz-L._UL1100_.jpg'
    }
  ];
  const [products, setProducts] = useState(initState)

  return (
    <div className="grid-container">
      <header className="">
        <a href="#" className="">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Product products={products}/>
          </div>
          <div className="sidebar">
            Cart Items
          </div>
        </div>
      </main>
      <footer>All right is reserved</footer>
    </div>
  );
}

export default App;

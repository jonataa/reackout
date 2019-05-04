import React, { useState, useEffect } from 'react';

import ProductList from '../components/ProductList';
import Product from '../components/Product';

const App = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [products]);

  async function fetchProducts() {
    // const response = await fetch('https://api.github.com/users/jonataa/repos');
    const products = [
      {id: 1, title: 'Foo Bar', price: {value: 0.99, currancy: 'BRL'}},
      {id: 2, title: 'Fizz Buzz', price: {value: 1.99, currancy: 'BRL'}},
    ];

    setProducts(products);
  }

  return (
    <ProductList>
      { products.map(product => <Product key={product.id} id={product.id} title={product.title} price={product.price} />) }
    </ProductList>
  );
};

export default App;

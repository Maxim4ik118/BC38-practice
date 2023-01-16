import { Product } from 'components/Product/Product';
import React from 'react';
import { useSelector } from 'react-redux';


const Products = () => {
    const products = useSelector(state => state.products.products)


  return (
    <div>
      
      <ul>
        {products && products.map(({id, img, price, discount, title}) => {
            return (
                <li key={id}><Product id={id} title={title} image={img} price={price} discount={discount}/></li>
            )
        })}
      </ul>
    </div>
  );
}

export default Products;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletCartProduct } from 'redux/cartSlice';
import { productsReducer } from 'redux/productsSlice';

export const Cart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cart.cart);
  // const cartFilter = useSelector((state) => state.cart.cartFilter);
  // const favouriteProducts = useSelector((state) => state.products.favouriteProducts );

  //   {
  //     id: 1,
  //     img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
  //     price: 10.99,
  //     title: 'Taco XXL',
  //     discount: {
  //         value: 17,
  //     },
  // }
  return (
    <div>
      <ul>
        {cartList &&
          cartList.map(cart => {
            return (
              <li key={cart.id}>
                <img src={cart.img} alt={cart.title} />
                <h2>{cart.title}</h2>
                {cart?.discount?.value > 0 && (
                  <p>Знижка: -{cart.discount.value}%</p>
                )}
                <p>Ціна: {cart.price}</p>
                <button onClick={()=> dispatch(deletCartProduct(cart.id)) } type='button'>Delet</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

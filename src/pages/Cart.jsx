import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SlClose } from 'react-icons/sl';
import { FaMinus, FaPlus } from 'react-icons/fa';

import {
  decrementProductCount,
  deletCartProduct,
  incrementProductCount,
} from 'redux/cartSlice';
import { productsReducer } from 'redux/productsSlice';

import css from '../App.module.scss';

export const Cart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cart.cart);
  // const cartFilter = useSelector((state) => state.cart.cartFilter);
  // const favouriteProducts = useSelector((state) => state.products.favouriteProducts );

  //   {
  //     id: 1,
  //     img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
  //     price: 10.99,
  //     quantity: 1,
  //     title: 'Taco XXL',
  //     discount: {
  //         value: 17,
  //     },
  // }

  return (
    <div>
      <ul className={css.cartList}>
        {cartList &&
          cartList.map(cart => {
            return (
              <li className={css.cartListItem} key={cart.id}>
                <img src={cart.img} alt={cart.title} />
                <button
                  className={css.removeBtn}
                  onClick={() => dispatch(deletCartProduct(cart.id))}
                  type="button"
                >
                  <SlClose />
                </button>
                <h2>{cart.title}</h2>
                {cart?.discount?.value > 0 && (
                  <p>Знижка: -{cart.discount.value}%</p>
                )}
                <p>Ціна: {cart.price}</p>
                <p>кількість: {cart.quantity}</p>
                <button
                  disabled={cart.quantity === 1}
                  onClick={() => dispatch(decrementProductCount(cart.id))}
                >
                  <FaMinus />
                </button>
                <button
                  onClick={() => dispatch(incrementProductCount(cart.id))}
                >
                  <FaPlus />
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

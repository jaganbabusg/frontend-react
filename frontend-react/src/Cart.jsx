import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { atom, useAtom } from 'jotai';
import { useJWT } from './UserStore';
import { useFlashMessage } from './FlashMessageStore';
import axios from 'axios';

const initialCart = [];
export const cartAtom = atom(initialCart);

export const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const { getJWT } = useJWT();
  const { showflashMessage } = useFlashMessage();
  //fetch items from database
  const fetchCart = async () => {
    const JWT = getJWT();
    const response = await axios.get(import.meta.env.VITE_API_URL + '/api/order', {
      headers: { Authorization: `Bearer ${JWT}` }
    }).catch(e => {
      console.error('Error fetching order:', e);
    });
    setCart(response.data);
  }
  //update items in cart
  const updateCart = async (modifiedCart) => {
    const JWT = getJWT();
    const cartData = modifiedCart.map(cartItem => ({
      item_id: cartItem.item_id,
      quantity: cartItem.quantity
    }));
    await axios.put(import.meta.env.VITE_API_URL + '/api/menu', { 'cartitems': cartData }, {
      headers: { Authorization: `Bearer ${JWT}` }
    }).catch(e => {
      showflashMessage('Error updating the order', 'danger')
    })
  }
  //add item to cart
  const addToCart = async (product) => {
    const existingCartItem = cart.find(cartItem => cartItem.item_id === product.id);
    if (!existingCartItem) {

    }
  };
  const modifyQuantity = async (item_id, quantity) => {
    if (quantity < 1) {
      return;
    }

  }
  const removeCart = (item_id) => {

  }
  return {
    cart,
    fetchCart,
    addToCart,
    modifyQuantity,
    removeCart
  };
}

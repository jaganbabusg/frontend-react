import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { useCart } from './Cart';
import axios from 'axios';

export default function Menu() {
  const [menuGroup, setMenuGroup] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [location, setLocation] = useLocation();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await axios.get(import.meta.env.VITE_API_URL + '/api/menu/');
      setMenuGroup(response.data.menu_groups);
      setMenuItems(response.data.menu_items);
    }
    fetchMenu();
  }, []);

  const handleAddToCart = (menuItems) => {
    addToCart(menuItems);
    setLocation('/cart');
  }

  const renderMenu = () => {
    const menuJSX = [];
    for (let m of menuItems) {
      menuJSX.push(
        <div className="col-md-3 mb-4" key={m.id}>
          <div className="card">
            <img src={'../images/' + m.item_image} className="card-img-top" style={{'width':'200px','height':'200px'}} alt={m.item_name} />
            <div className="card-body">
              <h5 className="card-title">{m.item_name}</h5>
              <p className="card-text">{m.item_description}</p>
              <p className="card-text">${m.item_price}</p>
              <button className="btn btn-primary" onClick={() => handleAddToCart(m)}>Add to Cart</button>
            </div>
          </div>
        </div>
      );
    }
    return menuJSX;
  }
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Menu</h1>
      <div className="row">
        {renderMenu()}
      </div>
    </div>
  );
}
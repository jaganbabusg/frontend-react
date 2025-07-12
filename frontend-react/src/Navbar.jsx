import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">MRS. BIRYANI HOMEMADE RESTAURANT</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location == '/' ? 'active' : ''}`} aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location == '/menu' ? 'active' : ''}`} href="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location == '/register' ? 'active' : ''}`} href="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location == '/login' ? 'active' : ''}`} href="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location == '/profile' ? 'active' : ''}`} href="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location == '/cart' ? 'active' : ''}`} href="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
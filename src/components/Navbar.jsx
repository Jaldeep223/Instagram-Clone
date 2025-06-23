

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const navItems = [
  { name: 'Home', path: '/', iconClass: 'fas fa-home' },
  { name: 'Search', path: '/search', iconClass: 'fas fa-search' },
  { name: 'Explore', path: '/explore', iconClass: 'fa-regular fa-compass' },
  { name: 'Reels', path: '/reels', iconClass: 'fas fa-video' },
  { name: 'Messages', path: '/messages', iconClass: 'fas fa-envelope' },
  { name: 'Notifications', path: '/notifications', iconClass: 'fa-regular fa-heart' },
  { name: 'Create', path: '/create', iconClass: 'fa-regular fa-square-plus' },
  { name: 'Profile', path: '/profile', iconClass: 'fas fa-user' },
  { name: 'More', path: '/more', iconClass: 'fa-solid fa-bars' },
];

const Navbar = () => (
  <nav className="navbar">
    <h2 className="logo">Instagram</h2>
    <div className="nav-links">
      {navItems.map(({ name, path, iconClass }) => (
        <Link to={path} key={name} className="nav-item">
          <i className={`icon ${iconClass}`}></i>
          <span className="label">{name}</span>
        </Link>
      ))}
    </div>
  </nav>
);

export default Navbar;


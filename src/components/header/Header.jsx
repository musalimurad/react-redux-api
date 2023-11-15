import { faPersonCirclePlus, faSignIn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.scss'
import CartItem from '../cart/CartItem'

const Header = () => {
  return (
    <header>
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
            <h2>Logo</h2>
        </div>
        <nav>
            <ul className='d-flex align-items-center m-0 p-0 list-unstyled'>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/products'}>Product</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </li>
            </ul>
        </nav>
        <div className="authBtn">
            <Link className="btn btn-outline-dark "><FontAwesomeIcon icon={faSignIn}/> Login</Link>
            <Link className="btn btn-dark mx-2"><FontAwesomeIcon icon={faPersonCirclePlus}/> Register</Link>
            <CartItem/>
        </div>
      </div>
    </header>
  )
}

export default Header

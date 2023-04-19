import React, {useRef, useEffect} from 'react'

import { NavLink } from 'react-router-dom'

import "./Header.css"

import { motion } from 'framer-motion'
import { Container, Row } from 'reactstrap'

import { useSelector } from 'react-redux'

import logo from "../../assets/images/eco-logo.png"
import userIcon from "../../assets/images/user-icon.png"

const nav_links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    }
]

const Header = () => {

    const headerRef =useRef(null);
    const totalQuantity = useSelector(state=>state.cart.totalQuantity)

    const menuRef = useRef(null);

    const stickyHeaderFun =() =>{
        window.addEventListener('scroll', () =>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky_header')
            }else {
                headerRef.current.classList.remove('sticky_header')
            }
        });
    };

    useEffect(() =>{
        stickyHeaderFun();

    return () => window.removeEventListener("scroll", stickyHeaderFun);
    });

    const menuToggle = () => menuRef.current.classList.toggle('active_menu')

  return (
<header className='header' ref={headerRef}>
    <Container>
        <Row>
            <div className='nav_wrapper'>
                <div className='logo'>
                    <img src={logo} alt="logo"/>
                    <div>
                        <h1>ComfyMart</h1>
                        {/* <p>Since 1993</p> */}
                    </div>
                </div>
                <div className='navigation' ref={menuRef} onClick={menuToggle}>
                    <ul className='menu'>
                    {nav_links.map((item, i) => (
                        <li className='nav_item' key={i}>
                            <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active' : ''}>{item.display}</NavLink>
                        </li>
                    ))}
                        {/* <li className='nav_item'>
                            <NavLink to='home'>Home</NavLink>
                        </li> */}
                        {/* <li className='nav_item'>
                            <NavLink to='shop'>Shop</NavLink>
                        </li>
                        <li className='nav_item'>
                            <NavLink to='cart'>Cart</NavLink>
                        </li> */}
                    </ul>
                </div>
                <div className='nav_icons'>
                    <span className='fav_icon'>
                    <i class="ri-heart-line"></i>
                    <span className='badge'>1</span>
                    </span>
                    <span className='cart_icon'>
                    <i class="ri-shopping-bag-line"></i>
                    <span className='badge'>{totalQuantity}</span>
                    </span>
                    <span>
                    <motion.img whileTap={{scale: 1.2}} src={userIcon} alt=''/></span>
                    <div className='mobile_menu'>
                    <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
                </div>
                </div>
                
            </div>
        </Row>
    </Container>
</header>  )
}

export default Header
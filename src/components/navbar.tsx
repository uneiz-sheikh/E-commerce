import React from 'react';
import Logo from "../assets/images/logo.png";
import SearchIcon from "../assets/images/search-interface-symbol.png"; 
import Usericon from "../assets/images/profile-user.png"
import favIcon from  "../assets/images/favorite.png"
import cartIcon from "../assets/images/cart.png"


const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className="logo">
                <img src={Logo} alt="Logo" /> 
            </div>

            <div className="search_box">
                <input placeholder='Search for products brands and more' type='text' />
                <div className="search_icon">
                    <img src={SearchIcon} alt="Search" />
                </div>
            </div>
            
            <div className="product-detail-wrp">
                <div className="product-detail">
                    <div className="icon">
                        <img src={Usericon} alt='user' />
                        <div className='name'> Tim </div>
                    </div>
                </div>
                <div className="product-detail">
                    <div className="icon">
                        <img src={favIcon} />
                        <div className='name'> Wishlist </div>
                        <div className="num_badge">
                            0
                        </div>
                    </div>
                </div>
                <div className="product-detail">
                    <div className="icon">
                        <img src={cartIcon} alt='user' />
                        <div className='name'> Cart </div>
                        <div className="num_badge">
                            0
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    </div>
  );
}

export default Navbar;

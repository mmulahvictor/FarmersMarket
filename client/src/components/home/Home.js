import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home () {
    return (
        <>
            <div className='title'>
                <h3>Raw<span >Farm</span><span id='red'>Products</span></h3>
            </div>
            <div className='login'>
                <Link className='link'>Login</Link>
                <Link className='link'>Sign In</Link>
            </div>
            <div className='header'>
                <p>Sell and buy your farm produce for <span>FREE</span></p>
                <p>Farm produce at the palm of your hand!</p>
                <p id='text'>Raw Farm Products is a <span>FREE</span> online marketplace where buyers and sellers meet to trade farm related products and services.</p>
            </div>
            <img src="https://media.istockphoto.com/photos/tractor-spraying-soybean-field-picture-id506164764?b=1&k=20&m=506164764&s=170667a&w=0&h=Jape5dTdB-8HNjQFjc6aJODc_XQTqTwxGN4j0-j-Icg=" alt="cows" />

            <footer>
                <p>copyright: <span>{ new Date().getFullYear() } </span> &copy;</p>
            </footer>
        </>
    );
}

export default Home;
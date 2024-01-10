
import './header.css';
import React from 'react';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <div className="headerContainer">
            <section className='headerImage'> 
                <div className='main-info'>
                    <h1>Lets Create Something<font color='#FFA726'>!</font></h1>
                    <h4>Beautiful Responsive Designs Created From</h4>
                    <h4>Scratch With No Templates. All Customized to</h4>
                    <h4>Your Specifications.</h4>
                    <Button className=""  size="lg" style={{background:'#FFA726'}}>Get Started</Button>
                </div>
            </section>
        
        </div>
    );
}

export default Header;
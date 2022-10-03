import React from "react";
import moon  from '../../images/moon.svg';

interface Switch{
  onClick:()=> void
}
const Header:React.FC<Switch> = ({onClick}) => {
    return <header className="header">

        <nav className="nav__box">
            <div className="nav__box--container">
            <h1>Where in the world?</h1>
            <div id="switch-theme">
                <img src={moon} alt="Moon Switch" id="logo" onClick={onClick}/>
                <span>
                    Dark Mode
                </span>
            </div>
            </div>
        </nav>
    </header>
}
export default Header;
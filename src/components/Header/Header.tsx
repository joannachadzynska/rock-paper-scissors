import * as React from "react";
import logo from "../../assets/images/logo.svg";
import { Score } from "../Score";

import "./Header.scss";

interface HeaderProps {
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header className='header'>
            <div className='logo-container'>
                <img src={logo} alt='logo' className='logo' />
            </div>
            <Score />
        </header>
    );
};

export default Header;

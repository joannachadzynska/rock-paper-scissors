import * as React from "react";

import "./Footer.scss";

const Footer: React.FC = () => (
    <footer>
        <div className='attribution'>
            Challenge by{" "}
            <a
                href='https://www.frontendmentor.io?ref=challenge'
                target='_blank'
                rel='noreferrer'>
                Frontend Mentor
            </a>
            . Coded by <a href='#'>Joanna Chądzyńska</a>.
        </div>
    </footer>
);

export default Footer;

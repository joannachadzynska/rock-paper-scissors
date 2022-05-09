import * as React from "react";
import "./Button.scss";

type ButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    role?: "rules" | "play" | "reset";
};

const Button: React.FC<ButtonProps> = ({ children, onClick, role }) => {
    return (
        <button className='button' data-role={role} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

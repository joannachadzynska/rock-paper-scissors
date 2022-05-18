import * as React from "react";
import { Link } from "react-router-dom";

import "./GameButton.scss";

interface GameButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    name: string;
}

const GameButton: React.FC<GameButtonProps> = ({ onClick, name, children }) => {
    let [icon, setIcon] = React.useState("");

    React.useEffect(() => {
        iconFetch(name);
    }, [name]);

    const iconFetch = async (name: string) => {
        await import(`../../assets/images/icons/icon-${name}.svg`)
            .then((data) => setIcon(data.default))
            .catch((err) => console.log(err));
    };

    return (
        <Link to='/play' onClick={onClick} className='game-button'>
            <img
                className='game-button-img'
                alt=''
                src={
                    name !== "blank"
                        ? icon
                        : "../../assets/images/icon-close.svg"
                }
            />
            {children}
        </Link>
    );
};

export default GameButton;

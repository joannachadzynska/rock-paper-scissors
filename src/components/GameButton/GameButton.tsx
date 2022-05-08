import { useLocalStorage } from "hooks";
import * as React from "react";
import { Link } from "react-router-dom";

import "./GameButton.scss";

interface GameButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    name: string;
}

const GameButton: React.FC<GameButtonProps> = ({ onClick, name }) => {
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
            <img className='game-button-img' alt={name} src={icon} />
        </Link>
    );
};

export default GameButton;

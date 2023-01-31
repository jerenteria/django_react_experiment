import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'
import { ReactComponent as AddIcon } from '../images/add_button.svg'

const Button = () => {
    return(
        <div>
            <Link to="/item/new" className="floating-button">
                <AddIcon />
            </Link>
        </div>
    )
};

export default Button;
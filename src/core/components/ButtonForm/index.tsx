import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const ButtonForm = ({ text }: Props) => (
    <div className="btn-container">
        <button className="btn-form">
            <h4 className="btn-text">{text}</h4>
        </button>
    </div>
)

export default ButtonForm;
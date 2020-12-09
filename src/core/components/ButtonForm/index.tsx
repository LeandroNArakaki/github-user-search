import React from 'react';
import './styles.css';

type Props = {
    text: string;
}

const ButtonForm = ({ text }: Props) => (
    <button className="btn btn-text">
        {text}
    </button>
)

export default ButtonForm;
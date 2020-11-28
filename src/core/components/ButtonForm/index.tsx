import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const ButtonForm = ({ text }: Props) => (
    <button className="btn-form"  >
        <h4 className="button-text">{text}</h4>
    </button>
)

export default ButtonForm;
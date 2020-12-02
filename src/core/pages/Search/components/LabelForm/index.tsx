import React from 'react';
import './styles.scss';

type Props = {
    text?: string;
    value?: number;
}

const LabelForm = ({ text, value }: Props) => {
    return (
        <div className="label-form-container">
            <h6 className="label-text"> 
                {text}{value}
            </h6>
        </div>
    );
}
export default LabelForm;
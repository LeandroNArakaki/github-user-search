import React from 'react';
import './styles.scss';

type Props = {
    text?: string;
    value?: string;
}

const LabelBoardInfo = ({ text, value }: Props) => (

    <div className="label-board-container">
        <h2 className="label-board-text">
            {text}
        </h2>
    </div>
);


export default LabelBoardInfo;
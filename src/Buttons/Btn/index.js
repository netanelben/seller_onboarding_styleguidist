import React from 'react';
import './style.scss';

export default function Btn({text, onClickHandler = null, disabled = false}) {
    return (
        <button className="btn" onClick={onClickHandler} disabled={disabled}>{text}</button>
    );
}
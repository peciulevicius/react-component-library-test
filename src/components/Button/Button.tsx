import * as React from 'react'
import './Button.css';

interface ButtonProps {
    text: string;
}

const Button = (props: ButtonProps) => {
    return <button>{props.text || 'Button text'}</button>
}

export default Button;
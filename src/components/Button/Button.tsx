import { ReactNode } from 'react';
import './Button.css';

interface IButtonProps {
    onClick: () => void,
    children: ReactNode
}

export function Button({ onClick, children } : IButtonProps) {
    return (
        <button className='button' onClick={(event) => onClick() }>
            {children}
        </button>
    );
}
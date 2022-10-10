import { ReactNode } from 'react';

import './Button.css';

interface IButtonProps {
    type: string,
    onClick: () => void,
    children: ReactNode
}

export function Button({ type, onClick, children } : IButtonProps) {
    const classes = `button type-${type}`;
    return (
        <button className={classes} onClick={(event) => onClick() }>
            {children}
        </button>
    );
}
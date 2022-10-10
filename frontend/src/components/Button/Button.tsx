import { ReactNode } from 'react';

import './Button.css';

interface Props {
    type: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    children: ReactNode
}

export function Button({ type, onClick, children } : Props) {
    const classes = `button type-${type}`;
    return (
        <button className={classes} onClick={(event) => onClick(event) }>
            {children}
        </button>
    );
}
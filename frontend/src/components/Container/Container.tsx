import { ReactNode } from 'react';

import './Container.css';


interface Props {
    children: ReactNode;
    className: string;
}

export function Container({ children, className } : Props) {
    const classes = `container ${className}`;
    return (
        <div className={classes}>
            {children}
        </div>
    );
}
import { ReactNode } from 'react';

import './Container.css';


interface IContainer {
    children: ReactNode;
    className: string;
}

export function Container({ children, className } : IContainer) {
    const classes = `container ${className}`;
    return (
        <div className={classes}>
            {children}
        </div>
    );
}
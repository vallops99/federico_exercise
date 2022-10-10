import { ReactNode } from 'react';

import './H2.css';

interface Props {
    className?: string;
    children: ReactNode;
}

export function H2({ className, children } : Props) {
    const classes = `title ${className}`;

    return <h2 className={classes}>{children}</h2>;
}
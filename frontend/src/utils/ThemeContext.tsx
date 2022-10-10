import React, { ReactNode, useLayoutEffect, useMemo, useState } from "react";

type Theme = "dark" | "light";
interface IThemeContext {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const DEFAULT_VALUE : IThemeContext = {
    theme: "light",
    setTheme: (theme: Theme) => {}
}

export const ThemeContext = React.createContext<IThemeContext>(DEFAULT_VALUE);

interface Props {
    children: ReactNode
}

export function ThemeContextProvider({ children } : Props) {
    const isBrowserDefaultDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const [theme, setTheme] = useState<Theme>(isBrowserDefaultDark() ? "dark" : "light");

    const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

    useLayoutEffect(() => {
		document.body.className = `body-${theme}`;
	}, [theme]);

    return (
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>
    );
}
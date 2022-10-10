import React, { useMemo, useState } from "react";
import { ReactNode } from "react";

export type Research = { country: string, name: string };

interface ISearchContext {
    searched: Research[];
    setSearched: (searched: Research[]) => void,

    toSearch: Research;
    setToSearch: (search: Research) => void;

    fireSearch: boolean;
    setFireSearch: (fireSearch: boolean) => void;
}

const DEFAULT_VALUE : ISearchContext = {
    searched: [],
    setSearched: (searched: Research[]) => {},

    toSearch: {
        country: "",
        name: ""
    },
    setToSearch: (search: Research) => {},

    fireSearch: false,
    setFireSearch: (fireSearch: boolean) => {},
};

export const SearchContext = React.createContext<ISearchContext>(DEFAULT_VALUE);

interface Props {
    children: ReactNode
}

export function SearchContextProvider({ children } : Props) {
    const [fireSearch, setFireSearch] = useState(false);
    const [toSearch, setToSearch] = useState<Research>(DEFAULT_VALUE.toSearch);
    const [searched, setSearched] = useState<Research[]>(DEFAULT_VALUE.searched);

    const value = useMemo(
        () => ({ searched, toSearch, fireSearch, setSearched, setToSearch, setFireSearch }),
        [toSearch, searched, fireSearch, setToSearch, setSearched, setFireSearch]
    );

    return (
        <SearchContext.Provider value={value}>
            { children }
        </SearchContext.Provider>
    );
}
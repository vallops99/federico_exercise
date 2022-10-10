import { useContext } from "react";

import { SearchContext } from "../utils";

export function useSearch() {
    return useContext(SearchContext);
}
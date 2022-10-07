import { useContext } from "react";
import { ThemeContext } from "../utils";

export function useTheme() {
    return useContext(ThemeContext);
}
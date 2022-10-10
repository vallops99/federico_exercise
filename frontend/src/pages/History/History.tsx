import { useCallback } from "react";
import { useNavigate } from "react-router";

import { H2 } from "../../components";
import { Research } from "../../utils";
import { useSearch } from "../../hooks";

import "./History.css";


export function History() {
    const navigate = useNavigate();
    const { searched, setToSearch, setFireSearch } = useSearch();
    
    const onLinkClick = useCallback((event : React.SyntheticEvent ) => {
        const newToSearch : Research = {
            country: event.currentTarget.getAttribute("data-country") || "",
            name: event.currentTarget.getAttribute("data-name") || ""
        };

        console.log(newToSearch);

        setFireSearch(true);
        setToSearch(newToSearch);

        navigate("/");
    }, [setToSearch, setFireSearch, navigate]);

    return (
        <div className="history-container">
            <H2> Last researches made </H2>
            <div className="researches-container">
                {[...searched].reverse().map((search, index) => {
                    return (
                        <div className="research" key={index}>
                            <button className="custom-link" onClick={(event) => onLinkClick(event)} data-country={search.country} data-name={search.name}>
                                {search.country}<br/>
                                {search.name}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
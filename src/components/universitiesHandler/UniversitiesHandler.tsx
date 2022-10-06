import Axios from "axios";
import { API } from '../../constants';
import { useCallback, useState } from "react";
import { Loader, UniversitiesContainer, CountryContainer } from "..";

import "./UniversitiesHandler.css";


export interface IUniversity {
    name: string;
    country: string;
    alpha_two_code: string;
    "state-province": string | null;

    domains: string[];
    web_pages: string[];
}

export function UniversitiesHandler() {
    const [country, setCountry] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [lastCountry, setLastCountry] = useState("");
    const [universities, setUniversities] = useState<IUniversity[]>([]);

    const searchButtonHandler = useCallback(() => {
        setIsLoading(true);

        setLastCountry(country);

        Axios.get(API, {
            params: { country }
        }).then(response => {
            setUniversities(response.data);
            setIsLoading(false);
        });
    }, [country]);

    const countryTextHandler = useCallback((value : string) => {
        setCountry(value);
    }, []);

    return (
        <div className='page-container'>
            <CountryContainer searchHandler={searchButtonHandler} countryHandler={countryTextHandler} />
            {isLoading ? <Loader /> : <UniversitiesContainer universities={universities} country={lastCountry} />}
        </div>
    );
}
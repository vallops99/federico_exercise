import Axios from "axios";
import { API } from '../../utils';
import { useCallback, useState } from "react";
import { Loader, UniversitiesContainer, Container, TextField, Button } from "../../components";

import "./Homepage.css";


export interface IUniversity {
    name: string;
    country: string;
    alpha_two_code: string;
    "state-province": string | null;

    domains: string[];
    web_pages: string[];
}

export function Homepage() {
    const [country, setCountry] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [lastCountry, setLastCountry] = useState("");
    const [universities, setUniversities] = useState<IUniversity[]>([]);

    const onButtonClick = useCallback(() => {
        setIsLoading(true);

        setLastCountry(country);

        Axios.get(API, {
            params: { country }
        }).then(response => {
            setUniversities(response.data);
            setIsLoading(false);
        });
    }, [country]);

    const onTextChange = useCallback((value : string) => {
        setCountry(value);
    }, []);

    return (
        <div className="page-container">
            <Container className="country-container">
                <h2 className='country-title'>Write a country and get its universities</h2>
                <TextField onChange={onTextChange} placeholder='Write a country' />
                <Button onClick={onButtonClick}>
                    Search
                </Button>
            </Container>
            {isLoading ? <Loader /> : <UniversitiesContainer universities={universities} country={lastCountry} />}
        </div>
    );
}
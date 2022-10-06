import { SearchButton, TextField } from '..';

import './CountryContainer.css';


interface ICountryContainer {
    searchHandler: Function;
    countryHandler: Function;
}

export function CountryContainer(props : ICountryContainer) {
    return (
        <div className='country-container'>
            <h2 className='country-title'>Write a country and get its universities</h2>
            <TextField handler={props.countryHandler} placeholder='Write a country' />
            <SearchButton handler={props.searchHandler} />
        </div>
    );
}
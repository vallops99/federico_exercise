import './SearchButton.css';

interface ISearchButtonProps {
    handler: Function
}

export function SearchButton({ handler } : ISearchButtonProps) {
    return <button className='button' onClick={(event) => handler(event) }>Search</button>;
}
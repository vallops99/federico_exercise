import './TextField.css';

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

export function TextField({ onChange, placeholder } : Props) {
    return (
        <input
            type='text'
            className="textfield"
            placeholder={placeholder}
            onChange={(event) => onChange(event)}
        />
    );
}
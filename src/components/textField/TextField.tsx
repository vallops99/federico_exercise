import './TextField.css';

interface ITextFieldProps {
    onChange: (value: string) => void;
    placeholder: string;
}

export function TextField({ onChange, placeholder } : ITextFieldProps) {
    return (
        <input
            type='text'
            className="textfield"
            placeholder={placeholder}
            onChange={(event) => onChange(event.currentTarget.value)}
        />
    );
}
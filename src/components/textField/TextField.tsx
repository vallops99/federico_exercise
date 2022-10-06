import './TextField.css';

interface ITextFieldProps {
    handler: Function;
    placeholder: string;
}

export function TextField({ handler, placeholder } : ITextFieldProps) {
    return (
        <input
            type='text'
            className="textfield"
            placeholder={placeholder}
            onChange={(event) => handler(event.currentTarget.value)}
        />
    );
}
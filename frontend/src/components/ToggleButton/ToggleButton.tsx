import './ToggleButton.css';


interface Props {
    onChange: (value : React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
}

export function ToggleButton({ onChange, checked } : Props) {
    const sliderClasses = `slider checked-${checked}`;

    return (
        <div className="toggle-switch">
            <label>
                <input
                    className="toggle-input"
                    type="checkbox"
                    name="checkbox"
                    onChange={(event) => onChange(event)}
                    checked={checked}
                />
                <span className={sliderClasses}></span>
            </label>
        </div>
    );
}
import './ToggleButton.css';


interface IToggleButtonProps {
    onChange: (value : boolean) => void;
    checked: boolean;
}

export function ToggleButton({ onChange, checked } : IToggleButtonProps) {
    const sliderClasses = `slider checked-${checked}`;

    return (
        <div className="toggle-switch">
            <label>
                <input
                    className="toggle-input"
                    type="checkbox"
                    name="checkbox"
                    onChange={(event) => onChange(event.currentTarget.checked)}
                    checked={checked}
                />
                <span className={sliderClasses}></span>
            </label>
        </div>
    );
}
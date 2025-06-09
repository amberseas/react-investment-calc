export default function InputField ({label, name, value, type, parameters, onChange}) {
    const handleParamsChange = (e) => {
        onChange(name, parseInt(e.target.value));
    };
    return (
        <p>
            <label htmlFor={label}>{label}</label>
            <input id={label} type={type} value={value} {...parameters} onChange={handleParamsChange} />
        </p>
    );
}
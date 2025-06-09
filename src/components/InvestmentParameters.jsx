export default function InvestmentParameters ({label, name, type, parameters, onChange}) {
    const handleParamsChange = (e) => {
        onChange(name, parseInt(e.target.value));
    };
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input id={label} type={type} {...parameters} onChange={handleParamsChange} />
        </div>
    );
}
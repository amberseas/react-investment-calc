export default function InvestmentParameters ({name, type, parameters}) {
    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <input id={name} type={type} {...parameters} />
        </div>
    );
}
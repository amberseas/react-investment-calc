import InputField from "./InputField";

export default function UserInput ({userInput, onChange}) {
    const inputFields = {
        initialInvestment: {
            label: 'Initial investment',
            name: 'initialInvestment',
            value: userInput.initialInvestment,
            type: 'number',
            parameters: {min: '0', required: true},
            onChange: onChange
        },
        annualInvestment: {
            label: 'Annual investment',
            name: 'annualInvestment',
            value: userInput.annualInvestment,
            type: 'number',
            parameters: {min: '0', required: true},
            onChange: onChange
        },
        expectedReturn: {
            label: 'Expected return',
            name: 'expectedReturn',
            value: userInput.expectedReturn,
            type: 'number',
            parameters: {min: '0', required: true},
            onChange: onChange
        },
        duration: {
            label: 'Duration',
            name: 'duration',
            value: userInput.duration,
            type: 'number',
            parameters: {min: '1', required: true},
            onChange: onChange
        },
    };
    return (
        <section id="user-input">
            <div className="input-group">
                <InputField {...inputFields.initialInvestment} />
                <InputField {...inputFields.annualInvestment} />
            </div>
            <div className="input-group">
                <InputField {...inputFields.expectedReturn} />
                <InputField {...inputFields.duration} />
            </div>
        </section>
    );
}
import InvestmentResult from "./InvestmentResult";

export default function InvestmentResultsTable () {
    return (
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                <InvestmentResult year={1} value={1234} interest={12356} totalInterest={12546} invested={23354} />
            </tbody>
        </table>
    );
}
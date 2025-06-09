import {calculateInvestmentResults} from "../util/investment";
import InvestmentResult from "./InvestmentResult";

export default function InvestmentResultsTable ({investParams}) {
    const annualData = calculateInvestmentResults(investParams);
    let totalInterest = 0;
    let totalInvestment = investParams.initialInvestment;

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
                {Object.values(investParams).every(val => val > 0) && annualData.map(data => {
                    totalInterest += data.interest;
                    totalInvestment += investParams.annualInvestment;
                    return <InvestmentResult key={data.year} year={data.year} value={data.valueEndOfYear} interest={data.interest} totalInterest={totalInterest} invested={totalInvestment} />;
                })}

            </tbody>
        </table>
    );
}
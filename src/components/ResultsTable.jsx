import {calculateInvestmentResults} from "../util/investment";
import Result from "./Result";

export default function ResultsTable ({investParams}) {
    const annualData = calculateInvestmentResults(investParams);
    let totalInterest = 0;
    let totalInvestment = investParams.initialInvestment;

    return (
        <table id="result">
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
                {annualData.map(data => {
                    totalInterest += data.interest;
                    totalInvestment += investParams.annualInvestment;
                    return <Result key={data.year} year={data.year} value={data.valueEndOfYear} interest={data.interest} totalInterest={totalInterest} invested={totalInvestment} />;
                })}

            </tbody>
        </table>
    );
}
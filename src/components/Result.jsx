import {formatter} from "../util/investment";

export default function Result ({year, value, interest, totalInterest, invested}) {
    return (
        <tr>
            <td>{year}</td>
            <td>{formatter.format(value)}</td>
            <td>{formatter.format(interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(invested)}</td>
        </tr>
    );
}
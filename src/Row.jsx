import React from "react";

export const Row = (props) => {
    return <tr onClick={ () => props.click(props.payment)}>
        <td>{props.index}</td>
        <td>{props.payment.paymentAmount}</td>
        <td>{props.payment.paymentCurrency}</td>
        <td>{props.payment.paymentType}</td>
        <td>{props.payment.paymentDate}</td>
        <td>{props.payment.paymentStatus}</td>
    </tr>
}
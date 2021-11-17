import React from "react";

export const ModelView = (props) => {
    return <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={props.close}>&times;</span>
            <div>
                <h6><strong>paymentAmount</strong> : {props.payment.paymentAmount}</h6>
                <h6><strong>paymentCurrency</strong> : {props.payment.paymentCurrency}</h6>
                <h6><strong>paymentType</strong> : {props.payment.paymentType}</h6>
                <h6><strong>paymentDate</strong> : {props.payment.paymentDate}</h6>
                <h6><strong>paymentAmount</strong> : {props.payment.paymentStatus}</h6>
                <h6><strong>toAccaunt</strong>
                    <ul>
                        <li><span>accountName</span> :{props.payment.toAccaunt.accountName}</li>
                        <li><span>sortCode</span> :{props.payment.toAccaunt.sortCode}</li>
                        <li><span>accountNumber</span> :{props.payment.toAccaunt.accountNumber}</li>
                    </ul>

                </h6>
                <h6><strong>fromAccount</strong>
                    <ul>
                        <li><span>accountName</span> :{props.payment.fromAccount.accountName}</li>
                        <li><span>sortCode</span> :{props.payment.fromAccount.sortCode}</li>
                        <li><span>accountNumber</span> :{props.payment.fromAccount.accountNumber}</li>
                    </ul>

                </h6>
            </div>

        </div>
    </div>;
}
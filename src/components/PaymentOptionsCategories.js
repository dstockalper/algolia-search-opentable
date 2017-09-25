import React from 'react';
import {connect} from 'react-algoliasearch-helper';

const PaymentOptionsCategories = ({helper}) => {

    const paymentSelect = (e) => {
        const cc = e.currentTarget;
        cc.classList.toggle('active');
        switch(cc.innerHTML) {
            case "Discover": // Discover to include Diners Club and Carte Blanche
                helper.toggleRefine('payment_options', "Diners Club").toggleRefine('payment_options', "Carte Blanche");
            case "AMEX":
            case "MasterCard":
            case "Visa":
                helper.toggleRefine('payment_options', cc.innerHTML).setQueryParameter('hitsPerPage', 5).search();
                break;
        }
    }

    const cc_names = ["AMEX", "Discover", "MasterCard", "Visa"];

    return (
        <div className="facet">
            <div className="facet-title">Payment Options</div>
            {cc_names.map(
                cc_name =>
                <div onClick={paymentSelect} className="credit-card">{cc_name}</div>
            )}

        </div>
    );

}

export default connect()(PaymentOptionsCategories);

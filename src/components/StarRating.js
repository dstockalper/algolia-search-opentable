import React from 'react';
import {connect} from 'react-algoliasearch-helper';

// source: https://codepen.io/Bluetidepro/pen/GkpEa 

const StarRating = ({star}) => {
    return (
        <div className="star-ratings-css">
            <div className="star-ratings-css-top" style={{width: (star/5)*100 + '%'}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        </div>
    );
}

export default connect()(StarRating);

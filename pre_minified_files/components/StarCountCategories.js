import React from 'react';
import {connect} from 'react-algoliasearch-helper';
import StarRating from './StarRating';

const StarCountCategories = ({helper}) => {

    const ratingSelect = (e) => {
        // helper.setQueryParameter('hitsPerPage', 20).search();
        // Filter by only one star-count option
        helper.removeNumericRefinement('stars_count');
        helper.addNumericRefinement('stars_count', '>=', e.currentTarget.getAttribute("name")).setQueryParameter('hitsPerPage', 5).search();

        // Place active style on the active option only
        document.querySelectorAll('.star-container').forEach(function(el) {
            el.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
    }

    // Star Ratings
    const star_values = [5, 4, 3, 2, 1, 0];

    return (
        <div className="facet">
            <div className="facet-title">Minimum Rating</div>
            {star_values.map(
                star_int =>
                <div onClick={ratingSelect} name={star_int} className="star-container">
                    <StarRating star={star_int} />
                </div>
            )}

        </div>
    );

}

export default connect()(StarCountCategories);

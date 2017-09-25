import React, {PropTypes} from 'react';
import {connect} from 'react-algoliasearch-helper';

const ShowMoreButton = ({results, helper}) => {

    const expandHitsDisplay = () => {
        // Display 5 more results
        helper.setQueryParameter('hitsPerPage', results.hitsPerPage + 5).search();
    }

    // If there are no more results to display, do not show the "Show More" button
    if(results && (results.hitsPerPage >= results.nbHits)) return <div/>;

    return (
        <div onClick={expandHitsDisplay} className="show-more-button">Show More</div>
    );
}

export default connect(
    state =>
        ({
            results: state.searchResults
        })
)(ShowMoreButton);

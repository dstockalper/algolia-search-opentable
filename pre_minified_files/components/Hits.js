import React, {PropTypes} from 'react';
import {connect} from 'react-algoliasearch-helper';
import Hit from './Hit';

const Hits = ({results}) => {
    if(!results) return <div className="hits"></div>;

    return (
        <ul className="hits">
            {results.hits.map(hit => <Hit key={hit.objectID} {...hit} />)}
        </ul>
    );
}

// Type check
Hits.propTypes = {
    results: PropTypes.object
};

export default connect(
    state =>
        ({
            results: state.searchResults
        })
)(Hits);

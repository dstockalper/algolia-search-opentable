import React, {PropTypes} from 'react';
import {connect} from 'react-algoliasearch-helper';

const Metadata = ({results}) => {
    if(!results) return <div className="metadata" ></div>;
    return (
        <div className="meta-wrapper">
            <div className="metadata">
                <span className="facet-title">{results.nbHits.toLocaleString()} {results.nbHits == 1 ? 'result': 'results'} found </span><span className="meta-seconds hush"> in {(results.processingTimeMS/1000).toFixed(3)} seconds</span>
            </div>
            <div className="meta-caddy"></div>
        </div>

    );
}

export default connect(
  state =>
    ({
        results: state.searchResults
    })
)(Metadata);

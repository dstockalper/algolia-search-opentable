import React from 'react';
import {connect} from 'react-algoliasearch-helper';

const SearchBox = ({helper}) => {
    return (
        <div className="header">
            <input className="search-box hush"
                placeholder="Search for Restaurants by Name, Cuisine, Location"
                autoFocus
                onChange={e => helper.setQuery(e.target.value).setQueryParameter('hitsPerPage', 5).search()}
            />
        </div>
    );
}

export default connect()(SearchBox);

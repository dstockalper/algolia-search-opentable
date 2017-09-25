import React from 'react';
import {connect} from 'react-algoliasearch-helper';

const Category = ({
  name,
  count,
  isRefined,
  handleClick
}) =>
<div className={isRefined ? "active cuisine-category" : "cuisine-category"}  name={name} onClick={handleClick}>
    <span>
        {name}
    </span>
    <span className="badge hush">{count}</span>
</div>;

const FoodTypesCategories = ({categories, helper}) => {
    return (
        <div className="facet">
            <div className="facet-title">Cuisine/Food Type</div>
              {categories.map(
                category =>
                  <Category
                    key={category.name}
                    {...category}
                    handleClick={e => helper.toggleRefine('food_type', category.name).setQueryParameter('hitsPerPage', 5).search()}
                  />
              )}
        </div>
    );
}

export default connect(
    state => ({
      categories: state.searchResults &&
        state.searchResults.getFacetValues('food_type', {sortBy: ['count:desc', 'selected']}) ||
        []
    })
)(FoodTypesCategories);

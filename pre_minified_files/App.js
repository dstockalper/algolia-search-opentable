import React, { Component } from 'react';
import './App.css';

import SearchBox from './components/SearchBox.js';
import Hits from './components/Hits.js';
import Metadata from './components/Metadata.js';
import ShowMoreButton from './components/ShowMoreButton.js';
import FoodTypesCategories from './components/FoodTypesCategories.js';
import StarCountCategories from './components/StarCountCategories.js';
import PaymentOptionsCategories from './components/PaymentOptionsCategories.js';

const algoliasearch            = require('algoliasearch');
const algoliasearchHelper      = require('algoliasearch-helper');
const reactAlgoliaSearchHelper = require('react-algoliasearch-helper');
const Provider = reactAlgoliaSearchHelper.Provider;
const appId     = 'K9PS3LKPUR';
const apiKey    = '3034b8c56727892e1490e71dedd95594';
const indexName = 'opentable_restaurants';

const client = algoliasearch(appId, apiKey);
const helper = algoliasearchHelper(
  client, indexName, {
    disjunctiveFacets: ['food_type', 'payment_options'],
    facets: ['stars_count'],
    hitsPerPage: 5,
    maxValuesPerFacet: 6
  }
);

// Search is set to rank 'words' over 'geo', so that far away restaurant is displayed if typed correctly.
// For more localized search set aroundRadius below and reverse 'words'/'geo' ordering on https://www.algolia.com/apps/K9PS3LKPUR/explorer/ranking/opentable_restaurants
helper.setQueryParameter('getRankingInfo', true);
helper.setQueryParameter('aroundLatLngViaIP', true); // user IP address
helper.setQueryParameter('aroundPrecision', 500); // Buckets by 1km
// helper.setQueryParameter('aroundRadius', 10000); // 10km max
helper.search();

const App = () =>
  <Provider helper={helper}>
    <div className="app">
      <SearchBox/>
      <div className="main">
          <div className="facets">
              <FoodTypesCategories/>
              <StarCountCategories/>
              <PaymentOptionsCategories/>
          </div>
          <div className="results">
              <Metadata/>
              <Hits/>
              <ShowMoreButton/>
          </div>
      </div>
    </div>
  </Provider>;

export default App;

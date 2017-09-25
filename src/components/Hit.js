import React from 'react';
import {connect} from 'react-algoliasearch-helper';
import StarRating from './StarRating';

// Percentage based star rating: https://codepen.io/Bluetidepro/pen/GkpEa

// React's version of innerHTML, dangerouslySetInnerHTML, requires an object with __html key as extra check to guard against XSS
const getHighlighted = s => ({__html: s});

// Individual result
const Hit = ({
    _highlightResult: {
        name: {
            value: name
        },
        food_type: {
            value: food_type
        },
        neighborhood: {
            value: neighborhood
        }
    },
    stars_count,
    reviews_count,
    price_range,
    image_url,
    reserve_url,
    mobile_reserve_url,
    _geoloc,
    _rankingInfo,
    blahbedeeblah
}) => {

    return (
        <div className="hit">
            <div className="img-container">
                <img src={image_url} className="hit-image"/>
            </div>
            <div className="hit-data">
                <div className="hit-data-line">
                    <span dangerouslySetInnerHTML={getHighlighted(name)} className="restaurant-name"></span>
                    { _rankingInfo.matchedGeoLocation.distance &&
                        <span className="hush distance"> ({(_rankingInfo.matchedGeoLocation.distance/(1.6*1000)).toFixed(1).toLocaleString()} mi)</span>
                    }
                </div>
                <div className="hush hit-data-line">
                    <span className="star-color">{stars_count} </span><StarRating star={stars_count} />
                    <span className="reviews-count">({reviews_count} reviews)</span>
                </div>
                <div className="hush hit-data-line">
                    <span className="hit-triplet" dangerouslySetInnerHTML={getHighlighted(food_type)}/><span> | </span>
                    <span className="hit-triplet"dangerouslySetInnerHTML={getHighlighted(neighborhood)}/><span> | </span>
                    <span className="hit-triplet">{price_range}</span>
                </div>
            </div>
        </div>
    );
}

export default connect()(Hit);

import React from 'react';

function DisplayListings({listing}) {
  return (
    <div>
      <h3> House Type: {listing.type} </h3>
      <p>Address: {listing.address},{listing.city}, {listing.state}, {listing.zipcode}</p>
      <p>${listing.price}/monthly - {listing.square_footage}sq/ft</p>
      <p>Bedrooms:{listing.bedrooms} Bathrooms:{listing.bathrooms}</p>
    </div>
  )
}

export default DisplayListings;

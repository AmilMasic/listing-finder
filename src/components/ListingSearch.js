import React from 'react';

import DisplayListings from './DisplayListings';


function ListingSearch({listingsToSearch}) {


  const listings = listingsToSearch.map(
    listing =>
      < DisplayListings
        key={listing.id}
        listing={listing}
      />)


  return (
    <div>
      {listings}
    </div>
  );
};

export default ListingSearch;

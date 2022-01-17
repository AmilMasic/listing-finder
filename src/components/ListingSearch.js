import React from 'react';

import DisplayListings from './DisplayListings';


const ListingSearch = ({listingsToSearch}) => {
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

import React from 'react';


const ListingSearch = () => {


  return <div>

          {listings && listings.map(listing =>
            <div key={listing.id}>
            
            </div>
          )}

        </div>
};

export default ListingSearch;

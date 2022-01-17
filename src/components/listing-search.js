import { useState } from 'react';


const ListingSearch = () => {
  const [listings, setListings] = useState([
    {
      type: "Townhouse",
      address: "123 Avenue",
      city: "San Fran",
      price: 1280,
      bedrooms: 2,
      bathrooms: 1,
      square_footage: 1200,}
  ]);

  return <div>

          {listings && listings.map(listing =>
            <div>
              <p>HouseType {listing.type} - Address: {listing.address},{listing.city}</p>
              <p>${listing.price}/monthly - {listing.square_footage}sq/ft</p>
              <p>Bedrooms:{listing.bedrooms} Bathrooms:{listing.bathrooms}</p>
            </div>
          )}

        </div>
};

export default ListingSearch;

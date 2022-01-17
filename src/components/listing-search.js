import { useState } from 'react';


const ListingSearch = () => {
  const [listings, setListings] = useState([
    {
      type: "Townhouse",
      address: "123 Avenue",
      city: "San Fran",
      state: "CA",
      zipcode: 19876,
      price: 1280,
      bedrooms: 2,
      bathrooms: 1,
      square_footage: 1200,
      description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
    },
    {
      type: "Duplex",
      address: "123 Elm Street",
      city: "Austin",
      state: "TX",
      zipcode: 19876,
      price: 1280,
      bedrooms: 2,
      bathrooms: 1,
      square_footage: 1200,
      description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
    },
    {
      type: "Single Family",
      address: "123 Brook Street",
      city: "Los Angeles",
      state: "CA",
      zipcode: 19876,
      price: 1280,
      bedrooms: 2,
      bathrooms: 1,
      square_footage: 1200,
      description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
    },
    {
      type: "Townhouse",
      address: "Elbow Lane",
      city: "San Fran",
      state: "CA",
      zipcode: 19876,
      price: 1280,
      bedrooms: 2,
      bathrooms: 1,
      square_footage: 1200,
      description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
    },
    {
      type: "Duplex",
      address: "Street Road",
      city: "Warrington",
      state: "PA",
      zipcode: 19876,
      price: 1280,
      bedrooms: 2,
      bathrooms: 1,
      square_footage: 1200,
      description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
    },
  ]);

  return <div>

          {listings && listings.map(listing =>
            <div>
              <h3> House Type: {listing.type} </h3>
              <p>Address: {listing.address},{listing.city}, {listing.state}, {listing.zipcode}</p>
              <p>${listing.price}/monthly - {listing.square_footage}sq/ft</p>
              <p>Bedrooms:{listing.bedrooms} Bathrooms:{listing.bathrooms}</p>
            </div>
          )}

        </div>
};

export default ListingSearch;

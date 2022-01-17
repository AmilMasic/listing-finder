const listings = [
  {
    id: 1,
    type: "Townhouse",
    address: "123 Avenue",
    city: "San Francisco",
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
    id: 2,
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
    id: 3,
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
    id: 4,
    type: "Townhouse",
    address: "Elbow Lane",
    city: "San Francisco",
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
    id: 6,
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
  {
    id: 7,
    type: "Duplex",
    address: "Street Road",
    city: "Las Vegas",
    state: "NV",
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
    id: 8,
    type: "Duplex",
    address: "Street Road",
    city: "Washington",
    state: "DC",
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
    id: 9,
    type: "Duplex",
    address: "Street Road",
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
    id: 10,
    type: "Duplex",
    address: "Street Road",
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
    id: 11,
    type: "Duplex",
    address: "Street Road",
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
    id: 12,
    type: "Duplex",
    address: "Street Road",
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
];

export default listings;

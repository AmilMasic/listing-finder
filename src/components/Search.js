import { useState } from 'react';

import ListingSearch from './ListingSearch';


function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filteredListings =  details.filter(
    listing => {
      return (
        listing
          .city
          .toLowerCase()
          .includes(searchField.toLowerCase())
      );
    }
  )

  const handleChange = event => {
    setSearchField(event.target.value);
  };


  function searchList(){
    return (
      <ListingSearch listingsToSearch={filteredListings} />
    );
  }

  return (
    <div>
      <div>
        <h2> Search listing by City </h2>
      </div>
      <div>
        <input
          type= "search"
          placeholder="San Francisco"
          onChange = {handleChange}
        />
      </div>

        {searchList()}

    </div>
  )

    }



export default Search;

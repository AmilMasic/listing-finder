import './App.css';

import ListingSearch from './components/ListingSearch';
import listingsData from './components/listingsData';

function App() {
  return (
    <div className="App">
      <h1> Welcome to ListingSearch!</h1>
      <h3> a SPA that lets users list and search for places that are available currently</h3>
      < ListingSearch listingsToSearch={listingsData} />
    </div>
  );
}

export default App;

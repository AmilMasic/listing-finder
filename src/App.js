import './App.css';
import listingsData from './components/listingsData';

import Search from './components/Search';

function App() {


  return (
    <div className="App">

      <h1> Welcome to ListingSearch!</h1>
      <h3> a SPA that lets users list and search for places that are available currently</h3>
      <Search details={listingsData} />
    </div>
  );
}

export default App;

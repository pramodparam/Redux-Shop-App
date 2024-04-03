
import './App.css';

import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<ProductListing/>}></Route>
      <Route path='/product/:productId' element={<ProductDetails/>}></Route>
      <Route>Not Found</Route>
      </Routes>
      </Router>
   
    </div>
  );
}

export default App;

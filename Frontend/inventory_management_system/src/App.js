import './App.css';
// import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import InsertProduct from './components/InsertProduct'
import UpdateProduct from './components/UpdateProduct';
import About from './components/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate
} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Navbar title="IMS" about="About"></Navbar>
      <ToastContainer/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<Products />} />
          <Route path="/insertproduct" element={<InsertProduct />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
          <Route path="/about" element={<About />} />

        </Routes>

      </Router>


    </div>
  );
}

export default App;

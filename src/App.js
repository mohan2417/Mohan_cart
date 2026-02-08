import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import ProDetails from './Pages/Productdetails';
import {ToastContainer} from 'react-toastify'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';   
import Cart from './Pages/Cart';
export default function App() {
    const [cartItems , setCartItems] = useState([]);
    return <div className="App">

        <Router>
            <div>
                <ToastContainer theme='dark'/>

            <Header cartItems ={cartItems}/>
            <Routes>
                <Route path="/" element={<Home/>} />                            
                <Route path="/search" element={<Home/>} />
               <Route path="/product/:id" element={<ProDetails cartItems ={cartItems} setCartItems={setCartItems}/>} /> 
                {/* <Route path="/order" element={<ProDetails cartItems ={cartItems} setCartItems={setCartItems}/>} />  */}
              <Route path="/cart" element={<Cart cartItems ={cartItems} setCartItems={setCartItems}/>} />

            </Routes>
            </div>
        </Router>
        <Footer/>
    </div>
}

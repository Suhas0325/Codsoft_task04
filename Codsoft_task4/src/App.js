import './App.css';
import Nav from './Component/Nav/nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Component/Products/product_catalog';
import { Provider } from 'react-redux';
import Cart from './Component/Cart/cart';
import store from './store';
function App() {
  return (
    <Provider store={store}>
    <Router>
        <div className='App'>
            <Nav />
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    </Router>
</Provider>
  );
}

export default App;

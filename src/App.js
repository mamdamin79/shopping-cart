import './App.css';
import ProductContextProvider from './Context/ProductContextProvider';
import Store from './componets/Store';
import { Switch , Route, Redirect } from 'react-router-dom'
import Details from './componets/Details'
import CartContextProvider from './Context/CartContextProvider'
import Navbar from './componets/Navbar';
import Cart from './componets/Cart';
import Filter from './componets/Filter';
import Category from './componets/Category';
function App() {
  return (
    
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar/>
          <Filter/>
          <Switch>
            <Route path="/cart" component={Cart}/>
            <Route path="/products/category/:type/:id" component={Details}/>
            <Route path="/products/category/:type" component={Category}/>
            <Route path="/products/:id" component={Details} />
            <Route path="/products" component={Store}/>
            <Redirect from='/*' to='/products'/>
          </Switch>
        </CartContextProvider>
      </ProductContextProvider>
  );
}

export default App;

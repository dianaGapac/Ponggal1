
import data from './data';
import Menu from  './components/Menu';
import {BrowserRouter, Route} from 'react-router-dom';
import MenuScreen from './screens/MenuScreen';
import MenuListScreen from './screens/MenuListScreen';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <div class="grid-container">
      <header class="row">
        <div>
          <a class="brand" href="index.html">PONGGAL</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
      <Route path='/menu/:id' component={MenuScreen} />
      <Route path='/' component={MenuListScreen} exact/> 
           
      </main>
      <footer class="row center">All right reserved</footer>
    </div>
    </div>
    </BrowserRouter>

     
  );
}

export default App;


import data from './data';
import Menu from  './components/Menu';

function App() {
  return (
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
        <div>
        <div class="row center">
        {
          data.menus.map(menu =>(
            <Menu key ={menu._id} menu={menu}></Menu>
          ))
        }
         </div>
        </div>
      </main>
      <footer class="row center">All right reserved</footer>
    </div>
    </div>
  );
}

export default App;

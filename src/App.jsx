import Home from "./pages/Home";
import {useState} from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import CataloguePage from "./pages/CataloguePage";
import {Route} from "react-router-dom";

function App() {

  const [visible, setVisible] = useState(false)

  const closeCart = () => {
    setVisible(false)
  }

  const openCart = () => {
    setVisible(true)
  }

  return (
    <div>
      <Navbar open={openCart}/>
      {visible && <Cart close={closeCart}/>}
      <Route exact path={"/"} render={() => <Home/>}/>
      <Route path={'/catalogue/:category'} render={() => <CataloguePage/>}/>
    </div>
  );
}

export default App;

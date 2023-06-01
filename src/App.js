
import './App.css';
import Home from './Component/Home';
import ManageUsers from './Component/ManageUsers';
import Reviews from './Component/Reviews';
import Adevertising from './Component/Adevertising';
import AdminLogin from './Component/AdminLogin';
import { BrowserRouter , Switch , Route } from 'react-router-dom';

function App() {
  return (
    <>

    {/* <Home /> */}
    {/* <Manageuser /> */}

    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={AdminLogin} ></Route>
      <Route path='/Home' exact component={Home} ></Route>
      <Route path='/ManageUsers' exact component={ManageUsers} ></Route>
      <Route path='/Reviews' exact component={Reviews} ></Route>
      <Route path='/Adevertising' exact component={Adevertising} ></Route>
    </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;

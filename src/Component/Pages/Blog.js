import React from 'react';
// import Registration from './Registration';
// import Login from './Login';
// import { BrowserRouter , Switch , Route } from 'react-router-dom';

function Blog() {

  const CheckClick = () => {
    alert('Clicked');
  }


  return (
    <>
      {/* <BrowserRouter>
    <Switch>
      <Route path='/Login' exact component={Login} ></Route>
      <Route path='/Registration' exact component={Registration} ></Route>
    </Switch>
    </BrowserRouter> */}


    <div>
      <button onClick={CheckClick}> Click </button>

    </div>
    </>
  )
}

export default Blog;
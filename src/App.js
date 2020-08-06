import React, { useState, useEffect } from 'react';
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import SideDrawer from './components/Navigation/sideDrawer/SideDrawer';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Prevencion from './components/Prevencion/Prevencion';
import Pais from './components/Pais/Pais';
import Home from './components/Home/Home';
import axios from 'axios'
import summary from './summary'


function App() {
  const [data, setData] = useState(null);

  useEffect( () => {

    /*axios
      .get('https://api.covid19api.com/summary')
      .then((response) => {

        setData(response.data)
      })*/
      setData(summary)

  },[])

  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false)
  }

 const sideDrawerOpenHandler = () => {
    setShowSideDrawer(!showSideDrawer)
  }

return (
  <Router>
  <div style={{height: '100%', width: '100%', minHeight: '100vh', backgroundColor: '#750d37', overflowX: 'hidden', fontFamily:'"Mulish" , sans-serif'}}>
    <Toolbar  showSideDrawer={sideDrawerOpenHandler} />
    <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />


    {/*
      A <Switch> looks through all its children <Route>
      elements and renders the first one whose path
      matches the current URL. Use a <Switch> any time
      you have multiple routes, but you want only one
      of them to render at a time
    */}
    <Switch>
      <Route exact path="/">
        {data && <Home  data={data}/>}
      </Route>
      <Route path="/prevencion">
        <Prevencion />
      </Route>
      <Route exact path="/pais/:pais">
         <Pais />
     </Route>
    </Switch>
  </div>
</Router>
)
}


export default App;


/*
https://api.covid19api.com/live/country/south-africa/status/confirmed/date/2020-03-21T13:13:30Z

72eb89b9bc9e4d63be5c0f5009554d87

*/
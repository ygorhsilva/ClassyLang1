import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Page1 from './pages/page1/Page1'
import Page2 from './pages/page2/Page2'
import Page3 from './pages/page3/Page3'
import Page4 from './pages/page4/Page4'

export default function Routes(){
  return(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Page1}/>
      <Route path='/linguagens/:nome' component={Page2}/>
      <Route path='/paradigma/:nome' component={Page3}/>
      <Route path='/addlinguagem' component={Page4}/>
    </Switch>
  </BrowserRouter>
  )
}

import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Buisness from './Buisness/Buisness'
import Buisnesses from './Buisnesses/Buisnesses'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Buisnesses}/>
      <Route exact path="/buisnesses/:slug" component={Buisness}/>
    </Switch>
    )
}

export default App
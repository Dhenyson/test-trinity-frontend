import { Switch, Route, HashRouter} from 'react-router-dom'
import Home from './pages/home'
import User from './pages/user'

function App() {
  return (
    <HashRouter className="App">
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/user/:username">
          <User />
        </Route>

      </Switch>
    </HashRouter>
  );
}

export default App;

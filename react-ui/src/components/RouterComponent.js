import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'

/*
 *
 */
const RouterComponent = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'> Home </Link>
            </li>

            <li>
              <Link to='/movies'> All IMDb Movies </Link>
            </li>

            <li>
              <Link to='/names'> All IMDb Names </Link>
            </li>

            <Switch>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </ul>
        </nav>
      </div>
    </Router>
  )
}

export default RouterComponent

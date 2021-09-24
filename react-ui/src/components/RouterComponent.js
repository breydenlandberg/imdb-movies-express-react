import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'
import Movies from './Movies'
import Names from './Names'

/*
 *  CONTEXT! CONTEXT!! CONTEXT!!!
 */
const RouterComponent = ({ movies, names }) => {
  return (
    <Router>
      <nav class='navbar' role='navigation' aria-label='main navigation'>
        <div class='navbar-brand'>
          <a class='navbar-item' href='/'>
            <img src='https://bulma.io/images/bulma-logo.png' width='112' height='28' />
          </a>
        </div>

        <div id='navbarMain' class='navbar-menu'>
          <div class='navbar-start'>
            <Link to='/' class='navbar-item'> Home </Link>

            <Link to='/movies' class='navbar-item'> Movies </Link>

            <Link to='/names' class='navbar-item'> Names </Link>

            <Switch>
              <Route path='/movies/:movie_id' />

              <Route path='/movies'>
                <Movies data={movies} />
              </Route>

              <Route path='/names/:name_id' />

              <Route path='/names'>
                <Names data={names} />
              </Route>

              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </nav>
    </Router>
  )
}

export default RouterComponent

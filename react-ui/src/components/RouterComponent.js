import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import MoviePage from './movies/MoviePage'
import MoviesPage from './movies/MoviesPage'
import NamePage from './names/NamePage'
import Names from './names/Names'
import Home from './Home'

/*
 *
 */
const RouterComponent = () => {
  return (
    <Router>
      <nav class='navbar is-primary' role='navigation' aria-label='main navigation'>
        <div class='navbar-brand'>
          <a class='navbar-item' href='https://www.imdb.com/'>
            <img src='https://pic.onlinewebfonts.com/svg/img_435948.png' />
          </a>
        </div>

        <div class='navbar-start'>
          <Link to='/' class='navbar-item has-text-link is-tab py-5'> Home </Link>

          <Link to='/movies' class='navbar-item has-text-link is-tab py-5'> Movies </Link>

          <Link to='/names' class='navbar-item has-text-link is-tab py-5'> Names </Link>
        </div>

        <div class='navbar-end'>
          <div class='navbar-item'>
            <strong> Log in </strong>
          </div>
          <div class='navbar-item'>
            <strong> Sign up </strong>
          </div>
          <div class='navbar-item'>
            <strong> Report incorrect data </strong>
          </div>
        </div>
      </nav>

      <Switch>
        <Route path='/movies/:movie_id'>
          <MoviePage />
        </Route>

        <Route path='/movies'>
          <MoviesPage />
        </Route>

        <Route path='/names/:name_id'>
          <NamePage />
        </Route>

        <Route path='/names'>
          <Names />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterComponent

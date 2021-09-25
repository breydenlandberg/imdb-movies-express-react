import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'
import MoviePage from './movies/MoviePage'
import Movies from './movies/Movies'
import NamePage from './names/NamePage'
import Names from './names/Names'

/*
 *  CONTEXT! CONTEXT!! CONTEXT!!!
 */
const RouterComponent = ({ movies, names }) => {
  return (
    <Router>
      <nav class='navbar is-primary' role='navigation' aria-label='main navigation'>
        <div class='navbar-brand'>
          <a class='navbar-item' href='https://www.imdb.com/'>
            <img src='https://pic.onlinewebfonts.com/svg/img_435948.png' />
          </a>
        </div>

        <div class='navbar-menu'>
          <Link to='/' class='navbar-item is-tab py-5'> Home </Link>

          <Link to='/movies' class='navbar-item is-tab py-5'> Movies </Link>

          <Link to='/names' class='navbar-item is-tab py-5'> Names </Link>
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
          <MoviePage data={movies} />
        </Route>

        <Route path='/movies'>
          <Movies data={movies} />
        </Route>

        <Route path='/names/:name_id'>
          <NamePage data={names} />
        </Route>

        <Route path='/names'>
          <Names data={names} />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterComponent

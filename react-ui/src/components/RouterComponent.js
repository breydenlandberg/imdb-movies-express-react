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
      <Link to='/' class='navbar-item'> Home </Link>

      <Link to='/movies' class='navbar-item'> Movies </Link>

      <Link to='/names' class='navbar-item'> Names </Link>

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

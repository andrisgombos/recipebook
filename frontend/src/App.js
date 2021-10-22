import './App.css';
import AddRecipe from './comp/addrecipe/add';
import RecipeIngridients from './comp/addrecipe/ingridient';
import Header from './comp/header/header';
import HomePage from './comp/home/startingpage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './comp/login/login';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/add' component={AddRecipe}/>
          <Route exact path='/header' component={Header}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

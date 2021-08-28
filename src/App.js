import './App.css';
import AddRecipe from './comp/addrecipe/add';
import RecipeIngridients from './comp/addrecipe/ingridient';
import Header from './comp/header/header';
import HomePage from './comp/home/startingpage';

function App() {
  return (
    <>
      {/* <HomePage/> */}
      <AddRecipe/>
      {/* <RecipeIngridients/> */}
    </>
  );
}

export default App;

import './App.css';
import { Route,Routes,Router,Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth } from 'firebase/auth';

import WithSplashScreen from './components/withSplashScreen';
import LoginForm from './components/login/login';
import UserProfile from './components/register/createprofile';
import MainPage from './components/dashboard/mainpage';
import Recommendation from './components/dashboard/recommendation/recommendation';
import RecipeDetail from './components/dashboard/recommendation/recipedetails/detailrecipe';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     
      <Routes>
        <Route path="/" Component={WithSplashScreen} />
        <Route path="/login" Component={LoginForm} />
        <Route path='/createprofile' Component={UserProfile}/>
        <Route path='/mainPage' Component={MainPage}/>
        <Route path='/recommendation' Component={Recommendation}/>
        <Route path='detailrecipe' Component={RecipeDetail}/>
      </Routes>
     </div>
  );
}

export default App;  

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Game from './Components/Game/Game.Container';
import history from './history';
import './App.css';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/"><HomePage/></Route>
        <Route path="/game"><Game/></Route>
      </Switch>
    </Router>
  );
}

export default App;

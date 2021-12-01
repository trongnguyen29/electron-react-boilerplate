import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Tiptap from './Editor';

const Hello = () => {
  return (
    <div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
      <button type="button">Click here</button>
      </div>
      <div className="App">
      <Tiptap />
    </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}

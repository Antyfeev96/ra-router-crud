import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";

export default function App() {
  return (
    <div className='app'>
      <Router>
        <Route path='/ra-router-crud/' exact component={HomePage} />
      </Router>
    </div>
  );
}

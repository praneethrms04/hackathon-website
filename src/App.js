import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';

import ChallengeDetails from './Pages/ChallengeDetails';
import Bootcamp from './Pages/Bootcamp';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element ={<Homepage />} />
        <Route path="/challengedetails" element ={<ChallengeDetails />} />
        <Route path="/bootcamp" element ={<Bootcamp />} />-
      </Routes>
    </Router>
  );
}

export default App;

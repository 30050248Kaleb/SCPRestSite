import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from './Nav';
import Data from './Data';


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Data" element={<Data />} />
        </Routes>
      </Router>
    </div>
    
  );
}

function Home() {
  return(
  <div>
    <div className="card alert-danger">
      <div className="card-header">
        <b>WARNING</b>
      </div>
      <div className="card-body">
        <p>The Foundation Database is <b>CLASSIFIED</b>.</p>
        <p>Access by unauthorized personnel is <b>strictly prohibited</b>.</p>
        <p>Perpetrators will be tracked, located and detained.</p>
      </div>
    </div>
    <br/>

  </div>
  )
}

export default App;

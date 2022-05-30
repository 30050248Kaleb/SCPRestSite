import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from './Nav';
import SCPs from './SCPs';


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SCPs" element={<SCPs />} />
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
    <div className="card card-body bg-dark text-light rounded my-3">
        <h3>Welcome authorized users, to the SCP Foundation Official Website</h3>
        <img src="favicon.png" width={"100px"}/>
        <p>Navigate to the SCP page to view information about the SCPs.</p>
    </div>
  </div>
  )
}

export default App;

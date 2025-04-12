import React from "react";  
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
  
import AdmissionForm from "./pages/AdmissionForm";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <div className="container">
      <h1>Welcome to Admission Portal</h1>
        <Routes>
          <Route path="/" element={<AdmissionForm/>} />
          <Route path="/Success" element={<Success/>} />
         </Routes>
     </div>
    </Router>
    
  );
}

export default App;
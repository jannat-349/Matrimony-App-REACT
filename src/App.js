import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profiles from "./pages/Profiles";
import ListBride from "./pages/ListBride";
import ListGroom from "./pages/ListGroom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/listBride" element={<ListBride />} />
          <Route path="/listGroom" element={<ListGroom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

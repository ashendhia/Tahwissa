import Navbar from "./components/Navbar";
import Site from "./components/Site";
import Explore from "./components/Explore"
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import Destinations from "./components/Destinations";

const App = () => {
  return (
    <body>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Destinations" element={<Site />} />
        </Routes>
      </Router>
    </body>
  )
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import MoviesList from "./pages/moviesList";
import Latihan1 from "./pages/latihan-1";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/latihan-1" element={<Latihan1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

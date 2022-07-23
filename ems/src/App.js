import "./App.css";
import Rahmen from "./components/rahmen/Rahmen.jsx";
import Header from "./components/header/Header.jsx";
import Puzzle from "./components/puzzle/Puzzle.jsx";
import Team from "./components/team/Team.jsx";
import Footer from "./components/footer/Footer.jsx";
import Trailer from "./components/trailer/Trailer.jsx";
import Painting from "./components/painting/Painting.jsx";
import Problem from "./components/problem/Problem.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Rahmen />
      <Problem />
      <Painting />
      <Puzzle />
      <Trailer />
      <Team />
    </div>
  );
}

export default App;
/*

      
      <Footer />
 */

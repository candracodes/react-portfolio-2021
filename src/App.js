// import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Project from './components/Project';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">

      {/* MAIN CONTAINER (start) ================================================= */}
      <div className="ts-page-wrapper" id="page-top">
      <Nav />
      <Hero />
      <Project />
      <Footer />
      </div>
      {/* MAIN CONTAINER (end) ================================================= */}
    </div>
  );
}

export default App;

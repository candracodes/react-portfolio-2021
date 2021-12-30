import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">

      {/* MAIN CONTAINER (start) ================================================= */}
      <div className="ts-page-wrapper" id="page-top">
      <Nav />
      <Hero />
      <Main />
      <Footer />
      </div>
      {/* MAIN CONTAINER (end) ================================================= */}
    </div>
  );
}

export default App;

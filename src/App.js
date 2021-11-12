import logo from './logo.svg';
import './App.css';
import Footer from './Footer.js'
import Header from './Header.js'
import MoviesRendered from './MoviesRendered.js'
function App() {
  return (
    <div className="App">
      <Header/>
      <MoviesRendered/>
      <Footer/>
    </div>
  );
}

export default App;

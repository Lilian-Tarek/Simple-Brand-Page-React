import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero/>
    </div>
    
  )
}

export default App

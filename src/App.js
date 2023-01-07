import './App.css';
import Navbar from './components/Navbar';
import {Home} from './components/Home';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Page2/>
      <Page3/>
      <Page4/>
    </div>

  );
}

export default App;

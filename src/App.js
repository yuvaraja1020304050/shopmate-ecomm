import logo from './logo.svg';
import './App.css';
import {Header} from './component/Header'
import { Allroutes } from './Routes/Allroutes';
function App() {
  return (
    <div className="App">
     <Header/>
     <Allroutes/>
    </div>
  );
}

export default App;

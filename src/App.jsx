
import './App.css';
import Section from './components/Section';
import { Home, Switch } from './util/iframeSource';
function App() {
  return (
    <div className="App">
     <Section url={Home}/>
     <Section url={Switch}/>
    </div>
  );
}

export default App;

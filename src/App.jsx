
import './App.css';
import Section from './components/Section';
import { listOfSplineData } from './util/splineData';
function App() {
  return (
    <div className="App">
      {listOfSplineData.map(data=><Section title={data.title} url={data.url}/>)}
    </div>
  );
}

export default App;

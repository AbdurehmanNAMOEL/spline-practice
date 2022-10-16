
import './App.css';
import NavBar from './components/NavBar';
import Section from './components/Section';
import { listOfSplineData } from './util/splineData';
function App() {
  
  return (
    <div className="App">
      <NavBar/>
      {listOfSplineData.map(data=>
        <Section 
         id={data.title} 
         title={data.title} 
         url={data.url}/>)
      }
    </div>
  );
}

export default App;

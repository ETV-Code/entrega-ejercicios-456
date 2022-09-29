import './App.css';
import { ClockClassComponent } from './ClockClassComponent';
import { ClockFunctionalComponent } from './ClockFunctionalComponent';

function App() {
  return (
    <div className="App">
      <ClockFunctionalComponent/>
      ----------------------------
      <ClockClassComponent/>
    </div>
  );
}

export default App;

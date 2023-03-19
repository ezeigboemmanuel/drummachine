import './App.css';

function App() {
  return (
    <div className="App" id = "drum-machine">
      <h1>DRUM MACHINE</h1>
      <div id="display">

      </div>
      <button className = "drum-pad" id  = "Heater1">Q<audio></audio></button>
      <button className = "drum-pad" id  = "Heater2">W</button>
      <button className = "drum-pad" id  = "Heater3">E</button>
      <button className = "drum-pad" id  = "Heater4">A</button>
      <button className = "drum-pad" id  = "Clap">S</button>
      <button className = "drum-pad" id  = "Open-HH">D</button>
      <button className = "drum-pad" id  = "Kick-n'-Hat">Z</button>
      <button className = "drum-pad" id  = "Kick">X</button>
      <button className = "drum-pad" id  = "Closed-HH">C</button>
    </div>
  );
}

export default App;

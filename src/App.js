import './App.css';
import React from "react"

function App() {
  const [active, setActive] = React.useState("")
  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      handleClick(event.key.toUpperCase());
    })
  }, [])
  const drumPads = [
    {
        "key": "Q",
        "name": "Heater 1",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
        "key": "W",
        "name": "Heater 2",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
        "key": "E",
        "name": "Heater 3",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
        "key": "A",
        "name": "Heater 4",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
        "key": "S",
        "name": "Clap",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
        "key": "D",
        "name": "Open High Hat",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
        "key": "Z",
        "name": "Kick n' Hat",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
        "key": "X",
        "name": "Kick",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
        "key": "C",
        "name": "Closed High Hat",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
];

function handleClick(selector){
  const audio = document.getElementById(selector);
  audio.play();
  setActive(selector)
}

function activeKey(act){
  console.log(act);
  setActive(act);
}

  return (
    <div className="App" id = "drum-machine">
      <div id="display">{active}</div>
        <div className='drum-pads'> 
          {drumPads.map(drumPad => <div key = {drumPad.url} onClick={() => {handleClick(drumPad.key); activeKey(drumPad.name)}} className='drum-pad' id = {drumPad.url}>
            {drumPad.key}
            <audio className='clip' id = {drumPad.key} src = {drumPad.url}></audio>
          </div>)}
        </div>
        
    </div>
  );
}

export default App;

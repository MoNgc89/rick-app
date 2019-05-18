import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

// class About extends React.Component{
//   render(){
//     return(
//       <>
//       console.log('response: ', response.data)
//       </>
//     )
//   }
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

// render()

// class App extends Component {
//   state = {
//     caracters: [],
//     image
//   }
// }
//
// async getCharacters () {
//   try {
//     // let random = Math.floor(Math.random () * 100 + 1)
//     const response = await axios.get (`https://rickandmortyapi.com/api/character/`)
//     console.log('response: ', response.data)
//   }
// }


export default App;

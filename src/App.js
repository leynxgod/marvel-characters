import React from "react";
import './App.css';
import CharactersList from "./components/CharactersList/CharactersList";

function App() {

  return (
          <div className='app'>
              <div className='container'>
                  <CharactersList/>
              </div>
          </div>
  );
}

export default App;
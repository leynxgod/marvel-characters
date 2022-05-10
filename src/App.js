import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import CharactersList from "./components/CharactersList/CharactersList";

function App() {

  return (
          <div className='app'>
              <div className='container'>
                  <Header/>
                  <CharactersList/>
              </div>
          </div>
  );
}

export default App;
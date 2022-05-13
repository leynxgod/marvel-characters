import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import CharactersList from "./components/CharactersList/CharactersList";
import Footer from "./components/Footer/Footer";

function App() {

  return (
          <div className='app'>
              <Header/>
              <div className='container'>
                  <CharactersList/>
              </div>
              <Footer/>
          </div>
  );
}

export default App;
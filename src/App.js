import React from 'react';
import './App.css';
import Player from "./components/Player/Player";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="App">
      <article class="screen">
          <div className="songImage"/>
          <div className="control-panel">
              <div className="info">
                  <h4>From Yesterday</h4>
                  <h3>30 seconds to mars</h3>
              </div>
              <Player/>
              <Footer/>
          </div>
      </article>
    </main>
  );
}

export default App;

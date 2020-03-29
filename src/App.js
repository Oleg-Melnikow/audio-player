import React from 'react';
import './App.css';

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
              <div className="player">
                  <div className="start-time"><span>00:00</span></div>
                  <div className="backward-wrap">
                      <input type="checkbox" id="backward"/>
                      <label className="backward" htmlFor="backward"/>
                  </div>
                  <div className="play-wrap">
                      <input type="checkbox" id="play" title="Play" onClick="togglePlayPause()"/>
                      <label className="play" htmlFor="play"/>
                  </div>
                  <div className="stop-wrap">
                      <input type="checkbox" id="stop" onClick="Ff()"/>
                      <label className="stop" htmlFor="stop"/>
                  </div>
                  <div className="forward-wrap">
                      <input type="checkbox" id="forward"/>
                      <label className="forward" htmlFor="forward"/>
                  </div>
                  <div className="full-time"><span>04:00</span></div>
              </div>
          </div>
      </article>
    </main>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import Player from "./components/Player/Player";
import Footer from "./components/Footer/Footer";
import Volume from "./components/Volume/Volume";

function App() {

    let [state, setState] = useState(false)

    let disable = () => {
        setState(false)
    }

    let enable = () => {
        setState(true)
    }

    return (
        <main className="App">
            <article className="screen">
                <div className="songImage"/>
                <div className="control-panel">
                    {state
                        ? <Volume state={state} disable={disable}/>
                        : null}
                    <div className="info">
                        <h4>From Yesterday</h4>
                        <h3>30 seconds to mars</h3>
                    </div>
                    <Player/>
                    <Footer enable={enable}/>
                </div>
            </article>
        </main>
    );
}

export default App;

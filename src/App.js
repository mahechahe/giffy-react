import './App.css';
import React from 'react';
import { ListOfGifs } from './components/ListOfGifs';
import { Route, Link} from "wouter";
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import Context from './context/staticContext';
import {GifsContextProvider} from './context/GifsContexts';

function App() {

  return (
    <Context.Provider value={{
      name: 'Estiven',
      suscribed: true
    }}>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
                <h1>Giffy</h1>
          </Link>

          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={ListOfGifs} path="/search/:keyword"/>
            <Route component={Detail} path="/gif/:id"/>
            <Route component={() => <h1>404 ERROR</h1>} path="/404"/>
          </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;

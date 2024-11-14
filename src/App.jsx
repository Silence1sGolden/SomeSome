import { useState } from 'react'
import './App.css'
import Menu from './pages/menu/Menu';
import Game from './pages/game/Game';
import Settings from './pages/settings/Settings';

function App() {
  const [page, setPage] = useState("default");

  console.log('RENDER');

  function onStartClick() {
    setPage('game');
  }

  function onSettingsClick() {
    setPage('settings');
  }

  function onMenuClick() {
    setPage('default');
  }
  
  switch (page) {
    case 'game': {
      return (
        <div className='page'>
          <Game onMenuClick={onMenuClick}/>
        </div>
      )
    }
    case 'settings': {
      return (
        <div className='page'>
          <Settings />
        </div>
      )
    }
    case 'default': {
      return (
        <div className='page'>
          <Menu onSettingsClick={onSettingsClick} onStartClick={onStartClick}/>
        </div>
      )
    }
  }
}

export default App

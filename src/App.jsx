import { useEffect, useState } from 'react'
import './App.css'
import Menu from './pages/menu/Menu';
import Game from './pages/game/Game';

function App() {
  const [page, setPage] = useState(null);

  function onStartClick() {
    setPage(<Game />)
  }

  function onSettingsClick() {
    console.log('Настройки');
  }

  useEffect(() => {
    setPage(<Menu onSettingsClick={onSettingsClick} onStartClick={onStartClick}/>);
  }, [])

  return (
    <div className='page'>
      {page}
    </div>
  )
}

export default App

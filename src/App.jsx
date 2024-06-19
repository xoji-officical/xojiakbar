import xoji from './assets/xoji-4.jpg'
import xoji1 from './assets/xoji-3.jpg'
import './App.css'

function App() {

  return (
    <>
      <div className='app1'>
        <a href="http://t.me/Xoji_oo00" target="_blank">
          <img src={xoji} className="logo" alt="Vite logo" />
        </a>
        <p className='app01'>Telegram</p>
        <a href="https://www.instagram.com/xoji_officia1" target="_blank">
          <img src={xoji1} className="logo react" alt="React logo" />
        </a>
        <p className='app01'>Instagram</p>
      </div>
    </>
  )
}

export default App

import './App.css'
import HeaderBar from './components/HeaderBar';
import PodcastList from './components/PodcastList';
import MenuBox from './components/MenuBox';
import Logo from './components/Logo'

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Logo />
        <MenuBox />
        <MenuBox />
        <MenuBox />
      </nav>
      <div className="main">
        <HeaderBar />
        <PodcastList />
      </div>
    </div>
  )
}

export default App

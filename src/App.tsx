import './App.css'
import HeaderBar from './components/HeaderBar';
import PodcastList from './components/PodcastList';
import PodcastDetails from './components/PodcastDetails';
import MenuBox from './components/MenuBox';
import Logo from './components/Logo'
import { MenuItem } from './interfaces'
import { faHouse, faList, faFileCirclePlus, faPlus, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { useParams } from 'react-router-dom'


function App() {

  const TADDY_API_URL = "https://api.taddy.org"

    // Instantiate Apollo Client
    const client = new ApolloClient({
      uri: TADDY_API_URL,
      cache: new InMemoryCache(),
      headers: {
        'X-API-KEY': import.meta.env.VITE_TADDY_API_KEY!,
        'X-USER-ID': import.meta.env.VITE_TADDY_USER_ID!
      }
    });


  let { uuid } = useParams();

  const mainMenuItems: Array<MenuItem> = [
    {description: "Explore Shows", icon: faHouse},
    {description: "Subscriptions", icon: faList},
    {description: "Queue", icon: faFileCirclePlus},
    {description: "Add by RSS Feed", icon: faPlus},
  ]

  const adminMenuItems: Array<MenuItem> = [
    {description: "Settings"},
    {description: "Help"},
    {description: "Content Policies"},
    {description: "Publisher guidelines"},
    {description: "End feedback"},
  ] 

  const getAppMenuItems: Array<MenuItem> = [
    {description: "Get the Android app", icon: faUpRightFromSquare},
    {description: "Get the iOS app", icon: faUpRightFromSquare},
  ]



  return (
    <div className="App">
      <nav className="nav">
        <Logo />
        <MenuBox items={mainMenuItems}/>
        <MenuBox items={adminMenuItems}/>
        <MenuBox items={getAppMenuItems}/>
      </nav>
      <div className="main">
        <HeaderBar />
        <ApolloProvider client={client}>
        { uuid ? <PodcastDetails uuid={uuid}/> : <PodcastList />}
        </ApolloProvider>
      </div>
    </div>
  )
}

export default App

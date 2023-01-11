import React, { useEffect, useState } from 'react'
import { Container } from "react-bootstrap";
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import HomeScreen from './screens/homescreen/homescreen';
import LoginScreen from './screens/loginScreen/loginScreen';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import './_app.scss';
import { useSelector } from 'react-redux';
import WatchScreen from './screens/watchScreen/watchScreen';
import SearchScreen from './screens/watchScreen/searchScreen';
import SubscriptionsScreen from './screens/subscriptionsScreen/subscriptionsScreen';
import ChannelScreen from './screens/channelScreen/channelScreen';

const Layout = ({children})=>{
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = ()=> toggleSidebar(value => !value);
  return (
    <>
      
    <Header handleToggleSidebar={handleToggleSidebar}/>
    <div className="app__container border border-info">
      <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
      <Container fluid className='app_main border border-warning'>
       {children}
      </Container>
    </div>

  </>
  )
}

const App = () => {

  const { accessToken, loading } = useSelector(state => state.auth)

  const navigate = useNavigate();

  useEffect(() => {
    if(!loading && !accessToken){
        navigate('/auth');
    }
  }, [accessToken, loading, navigate])
  

  return (

      <Routes>
        <Route path='/' exact element={<Layout><HomeScreen/></Layout>} />
        <Route path='/auth' element={<LoginScreen/>} />
        <Route path='/search/:query' element={<Layout><SearchScreen/></Layout>} />
        <Route path='/watch/:id' element={<Layout><WatchScreen/></Layout>} />
        <Route path='/channel/:channelId' element={<Layout><ChannelScreen/></Layout>} />
        <Route path='/feed/subscriptions' element={<Layout><SubscriptionsScreen/></Layout>} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
  
  )
}


export default App

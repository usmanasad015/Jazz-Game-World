import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Landing from './Components/Landing';
import LiveStreamScreen from './Screens/liveStreamScreen';
import LandingScreen from './Screens/landingScreen';
import GamingSecScreen from './Screens/gamingSecScreen';
import VideoLiveStreamScreen from './Screens/videoLiveStreamScreen';
import OtpLandingScreen from './Screens/OtpLandingScreen';
import Streamers from './Screens/StreamersScreen';

function App() {

  const [Token, setToken] = useState("")

  useEffect(() => {
    // if (Token === "") {
    GenerateToken()
    // }
  }, [])

  const GenerateToken = async (e) => {
    await fetch(
      `authenticate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          "username": "jPuseGame",
          "password": "Zu18nMpD2k"
        })
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token)
        // console.log("App.js Token value is ", data.token)

      })
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingScreen Token={Token} />}></Route>
          <Route path='/LiveStreamScreen' element={<LiveStreamScreen Token={Token} />}></Route>
          <Route path='/GamingSection' element={<GamingSecScreen Token={Token} />}></Route>
          <Route path='/VideoLiveStream' element={<VideoLiveStreamScreen Token={Token} />}></Route>
          <Route path='/OtpLanding' element={<OtpLandingScreen Token={Token} />}></Route>
          <Route path='/Streamers' element={<Streamers Token={Token} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
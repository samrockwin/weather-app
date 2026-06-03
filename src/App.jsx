import { useEffect, useState } from 'react'
import './App.css'
import searchImage from './assets/search.png'
import WeatherDetails from './components/WeatherDetails'
import clearIcon from './assets/sun.png'
import nightClearIcon from './assets/nightmode.png'
import cloudIcon from './assets/sun1.png'
import nightCloudIcon from './assets/cloudynight.png'
import clouds from './assets/clouds.png'
import blackClouds from './assets/black.png'
import showerRain from './assets/air.png'
import nightShowerRain from './assets/storm.png'
import thunder from './assets/thunder.png'
import snowy from './assets/snowy.png'
import mist from './assets/mist.png'


const App = () => {

  const weatherIcon = {
    "01d": clearIcon,
    "01n": nightClearIcon,
    "02d": cloudIcon,
    "02n": nightCloudIcon,
    "03d": clouds,
    "03n": clouds,
    "04d": blackClouds,
    "04n": blackClouds,
    "09d": showerRain,
    "09n": nightShowerRain,
    "10d": showerRain,
    "10n": nightShowerRain,
    "11d": thunder,
    "11n": thunder,
    "13d": snowy,
    "13n": snowy,
    "50d": mist,
    "50n": mist
  }

  let api_key = '1dd49cac08df6080c5eb998cf4190973'
  const [text, setText] = useState("Chennai")

  const [weathersIcon, setWeathersIcon] = useState (clearIcon)

  const [temp, setTemp] = useState(0)
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("IND")
  const [lat, setLat] = useState(0)
  const [log, setLong] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [wind, setWind] = useState(0)
  const [feels, setFeels] = useState(0)

  const [err, setErr] = useState("")

  const [loading, setLoading] = useState(false)

  const search = async () => {
     setLoading(true)
  try {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${api_key}`)
  const data = await response.json()
  
  
  if(data.cod !== 200){
    setErr(data.message)
    setCity("Not Found")
    return;
  }else if (data.cod === '404'){
     setLoading(false)
     return;
  }
   else{ setErr("")

  setTemp(Math.floor(data.main.temp))
  setCity(data.name)
  setCountry(data.sys.country)
  setLong(data.coord.lon)
  setLat(data.coord.lat)
  setHumidity(data.main.humidity)
  setWind(data.wind.speed)
  setFeels(data.main.feels_like)
  const weather = data.weather[0].icon
  setWeathersIcon(weatherIcon[weather] || clearIcon)
   }
  } catch (error) {
    setErr(error.message);
  }finally{
    setLoading(false)
  }
  
}

const handleCity = (e) => {
  setText(e.target.value)
}

const handleKeydown = (e) =>{
  if(e.key === 'Enter'){
    search()
  }
}
useEffect(()=>{
  search()
},[])

  return (
    <>
    <div className="container">
      <div className="input-container">
        <input type="text" className='cityInput' placeholder='search city' onChange={handleCity}
        value={text} onKeyDown={handleKeydown} />
        {<div className="search-image">
          <img src={searchImage} alt="search" style={{"width":"20px"}} onClick={search}/>
        </div> }
      </div>
      < WeatherDetails temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind} 
      feels={feels} weathersIcon ={weathersIcon}/> 
      {err &&<div className="error"><p>ERROR: {err}</p></div>} 
    </div>
    </>
  )
}

export default App
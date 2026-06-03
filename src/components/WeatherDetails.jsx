import humidityIcon from '../assets/weather.png'
import windIcon from '../assets/wind.png'
import feels_like from '../assets/feels_like.png'
const WeatherDetails = ({temp , city, country, lat, log, humidity, wind, weathersIcon, feels}) => {


  return (
    <>
    <div className="image">
      <img src={weathersIcon} alt="rain" />
    </div>
    <div className='temp'>{temp}°C</div>
    <div className="location">{city}</div>
    <div className='country'>{country}</div>
    <div className='cord'>
      <div>
        <span className='lat'>latitude</span>
        <span>{lat}</span>
      </div>
        <div>
        <span className='log'>longitudue</span>
        <span>{log}</span>
      </div>
    </div>
    <div className='data-container'>
      <div className="element">
        <img src={humidityIcon} alt="humidity" className='humidity' />
        <div className="data">
          <div className="humidity-percent">{humidity} %</div>
          <div className="text">Humidity</div>
        </div>
      </div>
         <div className="element">
        <img src={windIcon} alt="humidity" className='wind' />
        <div className="data">
          <div className="wind-percent">{wind} km/h</div>
          <div className="text">Wind Speed</div>
        </div>
      </div>
      <div className="element">
        <img src={feels_like} alt="humidity" className='wind' />
        <div className="data">
          <div className="feels-percent">{feels} °C</div>
          <div className="text">Feels Like</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default WeatherDetails
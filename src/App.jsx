import {MapPin,Droplets,Wind,Settings,Sun, Search } from 'lucide-react';
import './App.css';
import HourlyForecast from "./components/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast";

function App() {
  function toggleMenu(){
    const menu1 = document.querySelector('.menu');
    const container = document.querySelector('.container');
    const menu2 = document.querySelector('.location-mgt');
    
    menu1.classList.toggle('is-open');
    container.classList.toggle('is-open');
    menu2.classList.toggle('is-open');
  }
  function toggleSetting(){
    const container = document.querySelector('.container');
    const settingMenu = document.querySelector('.setting-menu');
    const settingBtn = document.querySelector('.setting');
    
    container.classList.toggle('setting-open');
    settingMenu.classList.toggle('setting-open');
    settingBtn.classList.toggle('setting-open');
  }
  return (
    <>
      {/* forecast section */}
      <div className="setting-menu">
        <div className="header">
          <h2>Setting</h2>
        </div>
        <div className="contain">
          <div className="change-lang">
            <div className="head">
              <h4>Language Selection</h4>
            </div>
            <div>
              <input type="radio" id="eng" name="language" value="english" checked />
              <label htmlFor="eng">English</label>
            </div>
            <div>
              <input type="radio" id="per" name="language" value="persian" />
              <label htmlFor="per">فارسی</label>
            </div>
          </div>
          <div className="change-units">
            <div className="head"><h3>Change Units</h3></div>
            <div className="change-temp">
              <div className="head"><h4>Change Temperature</h4></div>
              <div>
                <input type="radio" id="cel" name="temperature-unit" value="celsius" checked/>
                <label htmlFor="cel">Celsius</label>
              </div>
              <div>
                <input type="radio" id="rah" name="temperature-unit" value="Fahrenheit" />
                <label htmlFor="rah">Fahrenheit</label>
              </div>
            </div>
            <div className="change-speed">
              <div className="head"><h4>Change Speed</h4></div>
              <div>
                <input type="radio" id="metric" name="speed-unit" value="Metric" checked/>
                <label htmlFor="metric">Kilometers per hour</label>
              </div>
              <div>
                <input type="radio" id="imperial" name="speed-unit" value="Imperial" />
                <label htmlFor="imperial">Miles per hour</label>
              </div>
            </div>
          </div>
          <button className='card'>Apply</button>
        </div>
      </div>
      <div className="container">
        <section className="forecast">
          {/* showing location and menu button */}
          <nav>
            <div className="setting-btn">
              <button 
                className='setting'
                onClick={toggleSetting}
              >
                <Settings size={32}  strokeWidth={2}/>
              </button>
            </div>
            <div className="current-location">
              <h1><MapPin size={26}/>Tehran</h1>
            </div>
            <div className="menu-btn">
              <button 
                className='menu'
                type="button"
                onClick={toggleMenu}
              >
                <span className='line line-1'></span>
                <span className='line line-2'></span>
                <span className='line line-3'></span>
              </button>
            </div>
          </nav>
          {/* showing current situation */}
          <section className="current-situation">
            <div className="current-condition">
              <p><Sun />sunny</p>
            </div>
            <div className="current-temperature">
              <h1>18°C</h1>
            </div>
            <div className="minmax-temp">
              24/16°C
            </div>
            <div className="details">
              <p><Droplets /> 38%</p>
              <p><Wind /> 2.7km/h</p>
            </div>
            {/* showing forecast details */}
            <section className="forecast-details">
              {/* hourly forecast section */}
              <HourlyForecast />
              {/* weekly forecast section */}
              <WeeklyForecast />
              {/* weather condition details */}
              <section className="weather-details">
                <div className="wd-container">
                  <div className="wd-title">
                    <h2>Weather Details</h2>
                  </div>
                  <ul>
                    <li className='card'>
                      <h4>Precipitation probability: 37%</h4>
                    </li>
                    <li className='card'>
                      <h4>Dew point: 4°C</h4>
                    </li>
                    <li className='card'>
                      <h4>Air pressure: 1015.2 hPa</h4>
                    </li>
                    <li className='card'>
                      <h4>Cloud Cover: 25%</h4>
                    </li>
                    <li className='card'>
                      <h4>Visibility: 2000 m</h4>
                    </li>
                    <li className='card'>
                      <h4>Wind direction: 275°</h4>
                    </li>
                    <li className='card'>
                      <h4>UV index: 0</h4>
                    </li>
                  </ul>
                </div>
              </section>
              {/* air quality section*/}
              <section className="air-quality">
                <div className="aq-container">
                  <div className="aq-title">
                    <h2>Air Quality</h2>
                  </div>
                  <ul>
                    <li className='card'>
                      <h4>AQI: 35</h4>
                    </li>
                    <li className='card'>
                      <h4>PM2.5: 21</h4>
                    </li>
                    <li className='card'>
                      <h4>Carbon monoxide: 13</h4>
                    </li>
                    <li className='card'>
                      <h4>Nitrogen dioxide: 21</h4>
                    </li>
                    <li className='card'>
                      <h4>Dust: 37</h4>
                    </li>
                  </ul>
                </div>
              </section>
              {/* Marine weather section if coastal city */}
              <section className="marine-weather">
                <div className="mw-container">
                  <div className="mw-title">
                    <h2>Marine Weather</h2>
                  </div>
                  <ul>
                    <li className='card'>
                      <h4>Wave height: 1.4m</h4>
                    </li>
                    <li className='card'>
                      <h4>Wave direction: 310°</h4>
                    </li>
                    <li className='card'>
                      <h4>Sea surface temperature: 25°C</h4>
                    </li>
                    <li className='card'>
                      <h4>Wave Period: </h4>
                    </li>
                    <li className='card'>
                      <h4>Wind Wave Height: 2m</h4>
                    </li>
                    <li className='card'>
                      <h4>Wind Wave Direction: 310°</h4>
                    </li>
                  </ul>
                </div>
              </section>
              <section className="historical-weather hidden">
                <div className="hw-container">
                  <div className="hw-title">
                    Historical Weather
                  </div>
                </div>
              </section>
              <div className='footer'>
                <p>© 2025 Weather App. All rights reserved.</p>
              </div>
            </section>
          </section>
        </section>
      </div>
      <section className="location-mgt ">
          <div className="header">
            <form action="">
              <label >
                <Search />
              </label>
              <input type="text" className='card'/>
            </form>
          </div>
          <div className="locations">
            <div className="location card">Tehran</div>
            <div className="location card">Mashhad</div>
          </div>
          <div className="btns">
            <button className='add-location card'>Add Location</button>
            <button className='manage-location card'>Manage Location</button>
          </div>
      </section>
      {/* location management section */}
    </>
  )
}

export default App;


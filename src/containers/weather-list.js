import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMaps from '../components/google_maps';
class WeatherList extends Component {
    weatherData(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lat, lon} = cityData.city.coord;
        console.log(lat, lon)
        return (
            <tr key={name}>
                <td><GoogleMaps lng={lon} lat={lat} /></td>
                <td>
                    <Chart data={temps} color="red" units="K" />
                </td>
                <td>
                    <Chart data={pressure} color="green" units="hpa" />
                </td>
                <td>
                    <Chart data={humidity} color="yellow" units="%" />
                </td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure(hpa)</th>
                        <th>Humidity(%)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.weather.map(this.weatherData)}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    };
}

export default connect(mapStateToProps)(WeatherList);
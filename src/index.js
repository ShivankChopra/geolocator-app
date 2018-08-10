import React from 'react';
import ReactDom from 'react-dom';
import Search from './search';
import Location from './location';
import SolarInfo from './solar';
import axios from 'axios';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            address: '',
            latitude: '',
            longitude: '',
            sunrise: '',
            sunset: '',
            solarNoon: '',
            dayLength: ''
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(locationName){
        let lat, lon; // temporarily hold lat and long

        // get location coordinates and address using googlr api
        const locationUri = "https://api.tomtom.com/search/2/geocode/"
         + locationName 
         +".JSON?key=CM0aiYOn39NIcBoXdLc2qeYeEgtFzIHD&countrySet=IN";

        axios.get(locationUri).then(response => {
            let res = response.data.results[0]; // get first result only
            lat = res.position.lat;
            lon = res.position.lon;
            let addr = res.address;
            this.setState({
                address: addr.municipality + " " 
                         + addr.country,
                latitude: lat,
                longitude: lon
            });

            // get solar information using geolocation coordinates
            const solarUri = "https://api.sunrise-sunset.org/json?lat="
            + lat 
            + "&lng="
            + lon;

            axios.get(solarUri)
             .then(response => {
                let res = response.data.results;
                this.setState({
                   sunrise: res.sunrise,
                   sunset: res.sunset,
                   solarNoon: res.solar_noon,
                   dayLength: res.day_length
                });
            });
        }).catch(function(error){
            console.log(error);
        });  
    }

    render(){
        return (
            <div id="App">
                <Search handleSearch={(loc) => this.handleSearch(loc)}/>
                <Location address={this.state.address} latitude={this.state.latitude} longitude={this.state.longitude}/>
                <SolarInfo sunrise={this.state.sunrise} sunset={this.state.sunset} solarNoon={this.state.solarNoon} dayLength={this.state.dayLength}/>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
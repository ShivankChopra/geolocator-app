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
        /*
        const locationUri = "https://maps.googleapis.com/maps/api/geocode/json?address=\""
         + locationName 
         +"\"&sensor=true&key=AIzaSyBC1P0BPZ1H7JMLWjcmQfg7pFDwTZaTK-c";

        axios.get(locationUri).then(function(response){
            let res = response.results[0]; // get first result only
            console.log(res);
            this.setState({
                address: res.formatted_address,
                latitude: res.geometry.location.lat,
                longitude: res.geometry.location.lng
            });
        }).catch(function(error){
            console.log(error);
        }); 

        */

        const solarUri = "https://api.sunrise-sunset.org/json?lat="
         + this.state.latitude 
         + "&lng="
         + this.state.longitude;

        axios.get("https://api.sunrise-sunset.org/json?lat=28.5793261&lng=77.3207532")
         .then(function(response){
            let res = response.data.results;
            this.setState({
                sunrise: res.sunrise,
                sunset: res.sunset,
                solarNoon: res.solar_noon,
                dayLength: res.day_length
            });
        }); 
    }

    render(){
        return (
            <div id="App">
                <Search handleSearch={() => this.handleSearch()}/>
                <Location address={this.state.address} latitude={this.state.latitude} longitude={this.state.longitude}/>
                <SolarInfo sunrise={this.state.sunrise} sunset={this.state.sunset} solarNoon={this.state.solar_noon} dayLength={this.state.dayLength}/>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
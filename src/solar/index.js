import React from 'react';
//import ReactDom from 'react-dom';

function SolarInfo(props){
    return (
        <div id="Solar" className="gen">
            <h4>Sunrise : </h4> {props.sunrise}
            <h4>Sunset : </h4> <p>{props.sunset}</p>
            <h4>Solar Noon : </h4> <p>{props.solarNoon}</p>
            <h4>Day Length : </h4> <p>{props.dayLength}</p>
        </div>
    );
}

export default SolarInfo;
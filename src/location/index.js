import React from 'react';
//import ReactDom from 'react-dom';

function Location(props){
    return (
        <div id="Location" className="gen">
            <h4>Address : </h4> <p>{props.address}</p>
            <h4>Latitude : </h4> <p>{props.latitude}</p>
            <h4>Longitude : </h4> <p>{props.longitude}</p>
        </div>
    );
}

export default Location;
import React from 'react';
import Img from 'react-bootstrap/Img';

class Map extends React.Component {


  render() {
    return(
      <>
        <Img src={this.state.map} alt="map"></Img>
      </>
    );
  }
}

export default Map;

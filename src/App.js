import React from 'react';
import Map from './components/Map.js';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class App extends React.Component {

  // need constructor and super props for state
  // need city, location, map, and error props in one state object
  // need error close function
  // need an asynchronous function to get location that awaits and uses axios
  // need a try and catch for errors
  // need to render and return the map, form, and buttons

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      locObj: {},
      mapObj: {},
      error: false,
    }
  }

getCity = async () => {
  let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`;

  try {

  }

  catch (error) {
    
  }
}

  render() {
    return (
      <>
        <Container fluid>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search a City</Form.Label>
              <Form.Control type="input" placeholder="Type a city name here" />
              <Form.Text className="text-muted">Don't worry, we're not tracking you.</Form.Text>
            </Form.Group>
          </Form>
          <Button variant="dark" onClick={this.getCity}>Explore!</Button>
        </Container>
        <Map/>
      </>
    );
  }
}

export default App;

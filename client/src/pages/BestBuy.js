import React, { Component } from 'react';
import zillowapi from '../routes';
import Jumbotron from "../components/Jumbotron";

class ZillowAPI extends Component {
    state = {
       results: [] 
    }
 Render() {
   return(
<Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
        );
    };
};

export default ZillowAPI;


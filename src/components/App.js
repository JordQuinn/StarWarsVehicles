import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:

  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    };
}

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
  handleNameChange = (event) => {
    this.setState({value: event.target.value});
  }


  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
handleFormSubmit = (event) => {
  event.preventDefault();
  this.setState({
    pilot: this.state.value,//why is it this and not event.target.pilot???
    value: '',
    }
  )
}

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:


    componentWillMount() {
      fetch('https://swapi.co/api/vehicles/')
      .then(r => r.json() )
      .then((json) => {
      //  console.log("Data from componentWillMount fetch", json)
        this.setState({vehicles: json.results})
      })
    }
  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    let array = this.state.vehicles;
    console.log(array);
    let vehicles = array.map(vehicles => (
    <div key = {vehicles.name}>
      <div className = "wrapper">
        <div id = "card" style = {{width: "18rem"}}>
          <h4>Vehicle: {vehicles.name} </h4>
          <h5>Model: {vehicles.model}</h5>
          <div>
            <div>
              <h5>Specs:</h5>
              <ul>
                <li>Manufacturer: {vehicles.manufacturer}</li>
                <li>Class: {vehicles.vehicle_class}</li>
                <li>Passengers: {vehicles.passengers}</li>
                <li>Crew:{vehicles.crew}</li>
                <li>Length:{vehicles.length}</li>
                <li> Max Speed:{vehicles.max_atmosphering_speed}</li>
                <li>Cargo Capacity:{vehicles.cargo_capacity}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
))

    return (
      <div className="App">
        {/*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.
         */}
         <main>
          <section>
            <div className = "jumbotron" style = {{textAlign: 'left'}}>
              <h1> Star Wars </h1> <br></br>
              <hr></hr>
              <h2> The Vehicles of Star Wars </h2>
            </div>{//jumbotron end}
          }
              <div className = 'container' style = {{TextAlign: 'center'}}>
                <div className = 'whatsname'>
                  <h2> What is your name, pilot?</h2>
                  <form onSubmit = {this.handleFormSubmit}>
                    <div className = "pilot">
                      <input id="pilotName" onChange={this.handleNameChange} name="name" type="text" value={this.state.value} placeholder="Enter your name"/>
                    </div>{//ends pilot
                    }
                    <button type = "submit" >Submit</button>
                  </form>
                  <h1>{this.state.pilot}</h1>
                 </div> {//ends whatsname
                 }
             </div>{//ends container
             }
          <div id = "vehicles">
              {vehicles}
          </div>
        </section>
      </main>
    </div> //ends App
    );
  }
}

export default App;

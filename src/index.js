import React from "react";
import ReactDOM from "react-dom";

import Form from "./components/Form/Form";
import Result from "./components/Result/Result";

import "./myStyles.scss";

const APIkey = "";

class App extends React.Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    presure: "",
    wind: "",
    error: ""
  };

  writing = e => {
    this.setState({
      value: e.target.value
    });
  };

  search = e => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=
    ${this.state.value}&appid=${APIkey}&units=metric`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("error kurwa");
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString();
        this.setState(state => ({
          error: false,
          date: time,
          city: state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          presure: data.main.pressure,
          wind: data.wind.speed
        }));
      })
      .catch(error => {
        console.log(error);
        this.setState(state => ({
          error: true,
          city: this.state.value
        }));
      });
  };
  render() {
    return (
      <div className="app">
        <Form
          value={this.state.value}
          change={this.writing}
          submit={this.search}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

import React from "react";

const Result = props => {
  const {
    error,
    city,
    date,
    sunrise,
    sunset,
    wind,
    presure,
    temp
  } = props.weather;
  let content = null;
  if (!error && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <div>
        <div>Pogoda dla: {city}</div>
        <div>temperatura: {temp}</div>
        <div>data: {date}</div>
        <div>wschód słońca: {sunriseTime}</div>
        <div>zachód słońca: {sunsetTime}</div>
        <div>siła wiatru: {wind}</div>
        <div>aktualne ciśnienie: {presure}</div>
      </div>
    );
  }
  return <div>{error ? `nie mamy w bazie ${city}` : content}</div>;
};

export default Result;

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
//import Home from "./component/home.jsx";

function Counter(props){
    return (
        <div className="counter container-fluid  d-inline-flex justify-content-center bg-black text-light">
            <div className="clock bg-dark bg-opacity-50 m-2 p-3 rounded display-1">
                <i className="far fa-clock"></i>
            </div>
            <div className="six bg-dark bg-opacity-50 m-2 p-3 rounded display-1"><b>{props.digitSix % 10}</b></div>
            <div className="five bg-dark bg-opacity-50 m-2 p-3 rounded display-1"><b>{props.digitFive % 10}</b></div>
            <div className="four bg-dark bg-opacity-50 m-2 p-3 rounded display-1"><b>{props.digitFour % 10}</b></div>
            <div className="three bg-dark bg-opacity-50 m-2 p-3 rounded display-1"><b>{props.digitThree % 10}</b></div>
            <div className="two bg-dark bg-opacity-50 m-2 p-3 rounded display-1"><b>{props.digitTwo % 10}</b></div>
            <div className="one bg-dark bg-opacity-50 m-2 p-3 rounded display-1"><b>{props.digitOne % 10}</b></div>
        </div>
    );
};
Counter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};


let count = 0;
setInterval(function () {
    const six = Math.floor(count/100000);
    const five = Math.floor(count/10000);
    const four = Math.floor(count/1000);
    const three = Math.floor(count/100);
    const two = Math.floor(count/10);
    const one = Math.floor(count/1);
    console.log(six, five, four, three, two, one);
    count++;
//render your react application
    ReactDOM.render(<Counter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />, document.querySelector("#app"));
}, 1000);

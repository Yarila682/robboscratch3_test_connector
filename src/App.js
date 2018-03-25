import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {RobotConrolAPI} from 'Robboscratch3_DeviceControlAPI';



class App extends Component {

constructor(){

  super();

  this.RCA =  new RobotConrolAPI();

}

connectorTest(){

     this.RCA.searchRobotDevices();

}

stopSearchProcess(){

if (this.RCA instanceof RobotConrolAPI){

    this.RCA.stopSearchProcess();

}

}

stopDataRecievingProcess(){


  if (this.RCA instanceof RobotConrolAPI){

      this.RCA.stopDataRecievingProcess();

  }

}




setRobotPower(){


  if (this.RCA instanceof RobotConrolAPI){

    let leftMotorPower = document.getElementById("leftMotorPower").value;
    let rightMotorPower = document.getElementById("rightMotorPower").value;

    this.RCA.setRobotPower(leftMotorPower,rightMotorPower);

  }

}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        

        <div>

              <button class="connector-start-stop" onClick={this.connectorTest.bind(this)}>Connector test!</button>
              <button class="connector-start-stop" onClick={this.stopSearchProcess.bind(this)}>Connector stop!</button>
              <button class="connector-start-stop" onClick={this.stopDataRecievingProcess.bind(this)}>Stop data recieve!</button>

        </div>

        <div>

              <input id="leftMotorPower"  type="text"></input>
              <input id="rightMotorPower" type="text"></input>

        </div>

        <div>

            <button  onClick={this.setRobotPower.bind(this)}> Set motors power. </button>

        </div>


      </div>
    );
  }
}

export default App;

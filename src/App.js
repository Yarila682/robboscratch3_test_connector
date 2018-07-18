import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const {RobotControlAPI} =  require ('Robboscratch3_DeviceControlAPI');
const {DeviceControlAPI} =  require ('Robboscratch3_DeviceControlAPI');



class App extends Component {

constructor(){

  super();

  this.RCA =  new RobotControlAPI();
  this.DCA  = new DeviceControlAPI();

}

connectorTest(){

     this.RCA.searchRobotDevices();

}

stopSearchProcess(){

if (this.RCA instanceof RobotControlAPI){

    this.RCA.stopSearchProcess();

}

}

stopDataRecievingProcess(){


  if (this.RCA instanceof RobotControlAPI){

      this.RCA.stopDataRecievingProcess();

  }

}




setRobotPower(){


  if (this.RCA instanceof RobotControlAPI){

    let leftMotorPower = document.getElementById("leftMotorPower").value;
    let rightMotorPower = document.getElementById("rightMotorPower").value;

    this.RCA.setRobotPower(leftMotorPower,rightMotorPower);

  }

}

flashFirmware(){

    var ff = document.getElementById("firmware_flashing");

    this.DCA.flashFirmware(0,(status) => {

            this.createPortsDiv(ff,status);
    });

}


createPortsDiv(root,element){

      var el = document.createElement('div');
      el.innerHTML = element;
      root.appendChild(el);

}

searchPorts(){

    var ports = document.getElementById("ports");

  this.DCA.searchPorts((port) => {



        this.createPortsDiv(ports,port.path);

  });

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
              <button class="connector-start-stop" onClick={this.flashFirmware.bind(this)}>Flash firmware!</button>
              <button class="connector-start-stop" onClick={this.searchPorts.bind(this)}>Search ports!</button>

        </div>

        <div>

              <input id="leftMotorPower"  type="text"></input>
              <input id="rightMotorPower" type="text"></input>

        </div>

        <div>

            <button  onClick={this.setRobotPower.bind(this)}> Set motors power. </button>

        </div>

        <div id="ports">


        </div>

        <div id="firmware_flashing">


        </div>


      </div>
    );
  }
}

export default App;

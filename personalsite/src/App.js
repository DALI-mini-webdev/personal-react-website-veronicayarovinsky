import './App.css';
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import LocationPosting from './page2';
import Page3 from './page3';
import { Component } from 'react';



const buttonFunction = () => {
  console.log("the button was clicked");
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
  x.style.display = "block";
  }
  else {
  x.style.display = "none";
  }
}

const swimming = {
  name: "Swimming",
  years: 10
}

const diving = {
  name: "Diving",
  years: 4 
}

const waterpolo = {
  name: "Waterpolo",
  years: 3 
}

const mySports = [swimming, diving, waterpolo];
const sportMap = mySports.map((sport) => {
  return(
  <div className = "sport">
      <p>
        {sport.name} for {sport.years} years.
      </p>
    </div>
  )
  })


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      currPage: "Home"
    }
    }


  changeCurrPage = (newCurrPage) => {
    this.setState({
      currPage: newCurrPage,
    });
  }

  renderPage = () => { 
    if(this.state.currPage === "Page2") {
      return <LocationPosting/>
    } else { 
      return <Page3/>

    }
  }
      
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar changeCurrPage = {this.changeCurrPage}/>
          <div>
          <div>
             <button className="button" onClick={buttonFunction}>about me</button>        
          </div>

         <div className="myDiv" id="myDIV">
         Hi! I'm Veronica, a first-year at Dartmouth College.  am studying Engineering
                     and Cognitive Science. I research in the SENSE lab at the Thayer School of Engineering,
                     I am the assistant project manager of the Solar Stove Project of DHE, and 
                     I am also part of a start-up called Legislate. Outside of academics, you can find me cliff diving, hiking with friends,
                     and on the ski slopes. A cool fact about me is that I have raced against 
                     Ryan Lochte at a swimming national championship.
         </div>        

         <div className="sportStyle">
           <p>These are the sports I have played:</p>
           {sportMap}
           <LocationPosting />

         </div>
          </div>
          {this.renderPage()}
        </header>
      </div>
    );
  }
  }

  
export default App;

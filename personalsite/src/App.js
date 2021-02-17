import './App.css';
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import LocationPosting from './page2';
import Page3 from './page3';
import { Component } from 'react';
import axios from 'axios'; 
import ToDoBoard from './components/ToDoBoard';
import Firebase from './firebase/index';




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
      currPage: "Home",
      data: null
    }
    }

    fetchData = () => {
      axios.get("https://poetrydb.org/random")
      .then((response) => {
          console.log(response);
          this.setState({data: response.data[0]})
      }).catch((error) => {
        console.log(error)
      })
      

    };

    renderData = () => {
      if(this.state.data) {
          return(
              <div>
                <div> {this.state.data.title} </div>
                <div> By {this.state.data.author}</div>
                {this.state.data.lines.map((line, idx) => {
                  return(<div key = {idx}>{line}</div>)
                })}
              </div>

          )

      }else{
        return null
      }
    }



  // changePage = (page) => {
  //     props.changeCurrPage(page)
  //  }


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
          <div> 
            <button onClick = {this.fetchData}>click here!</button>
            {this.renderData()}
          </div>
         <div className="myDiv" id="myDIV">
         Hi! I'm Veronica, and here is my bio!!
         </div>        

         <div className="sportStyle">
           <p>These are the sports I have played:</p>
           {sportMap}
           {/* <LocationPosting /> */}
           <ToDoBoard />

         </div>
          </div>
          {this.renderPage()}
        </header>
      <div className="App">
        <LocationPosting />
        <ToDoBoard />
      </div>
  );
      </div>
    );
  }
  }

  
export default App;

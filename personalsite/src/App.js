import './App.css';

function App() {
  
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
  

 
  return (
    <div className="App">
    
        <meta content="width=device-width, initial-scale=1"></meta>
      <head>
        <title> Veronica Yarovinsky</title>
        <link rel="stylesheet" href="app.css"></link>
      </head>
      <body>
        <div className = "container">
          <div className = "img-ground">
              <meta content="width=device-width, initial-scale=1"></meta>
                <img src = "background.jpg"></img>
            </div>
            <div className="header-text">
                <h1>VERONICA YAROVINSKY</h1>
            </div>
            <div className="header-line">
                <h1>______</h1>
            </div>
            <div className = "subtitle">
                <a>student, adventurer, designer.</a>
            </div>
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
        </div>




      </body>
    </div>
  );


}

export default App;

import React, { Component } from 'react';
import Statitem from './Components/Statitem';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pathogym</h1>
          <p className="App-intro">
            Technology has infected this gym to make it more accessible. Put on your earphones and let us guide you to available and smarter machines.
          </p>
          <img src={this.logo} alt="Image of gym with smarter machines"/>
          <hr/>
        </header>
        <body>
          <h2 className="featuredTech"> Featured Technology </h2>
          <div className="item">
            <h3>
              Smart Treadmill (Proof of Concept)
            </h3>
            <img src={this.treadmill} alt="Image of a smart treadmill"/>
            <p>
              You will be guided to the nearest available treadmill by directions from your headphone. The treadmill is completely voice activated but can also
              be controlled by buttons to control the speed.
              If it is your first time on the treadmill, please start at the default speed of 1 and work your way up.
              You can tell the treadmill to change the speed from 1 to 10.
              The handles of the treadmill are touch sensitive so it will slow to a stop if the hands are released.
            </p>
          </div>
          <div className="item">
            <h3>
              Smart Elliptical (Under Development)
            </h3>
            <img src={this.elliptical} alt="Image of regular elliptical"/>
            <p>
              This gym equipment is still under development.
            </p>
          </div>
          <div className="item">
            <h3>
              Smart Dumbells (Under Development)
            </h3>
            <img src={this.dumbells} alt="Image of regular dumbells"/>
            <p>
              This gym equipment is still under development.
            </p>
          </div>
          <div className="item">
            <h3>
              Smart High Bars (Under Development)
            </h3>
            <img src={this.highbar} alt="Image of regular high bar"/>
            <p>
              This gym equipment is still under development.
            </p>
          </div>
          <div className="item">
            <h3>
              Smart parallel bar (Under Development)
            </h3>
            <img src={this.parallelbar} alt="Image of regular parallel bar"/>
            <p>
              This gym equipment is still under development.
            </p>
          </div>
          <div className="clear"> </div>

          <div className="user">
          <br/>
            <hr/>
            <h2 className="username">
              Welcome Back ImaginaryPerson
            </h2>
            <Statitem
              title="Stats Last Week"
              machines="x, y, z"
              distance="#"
              calories="#"
            />
            <Statitem
              title="Stats Yesterday"
              machines="x, y, z"
              distance="#"
              calories="#"
            />
            <Statitem
              title="Stats Today"
              machines="x, y, z"
              distance="#"
              calories="#"
            />
          </div>
        </body>
        <footer className="footer">
          <br/>
          <hr/>
          <p className="useless">
            This is the footer and it contains useless information.
          </p>
          <p className="copyright">
            Copyright {(new Date().getFullYear())}
          </p>
        </footer>
      </div>
    );
  }
}

export default App;

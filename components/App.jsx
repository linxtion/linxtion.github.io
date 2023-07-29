import React from "react";
import ReactDOM from "react-dom";

import GlitchText from "./GlitchText";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="content">
          <h1 className="name">
            <GlitchText text="Xiao Lin" />
          </h1>
          <ul className="social-icons">
            <li className="social-icon">
              <a className="links" href="https://www.linkedin.com/in/xiaonil">
                <i className="ion-social-linkedin"></i>
              </a>
            </li>
            <li className="social-icon">
              <a className="links" href="https://github.com/xiaolin">
                <i className="ion-social-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));

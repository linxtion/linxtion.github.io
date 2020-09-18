import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  render() {

    return (
      <div className='app'>
        <h1 className='name'>Xiao Lin</h1>
        <ul className="social-icons">
          <li className="social-icon">
            <a className="links" href="https://github.com/xiaolin">
              <i className="ion-social-github"></i>
              <span>GitHub</span>
            </a>
          </li>
          <li className="social-icon">
            <a className="links" href="https://www.linkedin.com/in/xiaonil">
              <i className="ion-social-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </li>
          <li className="social-icon">
            <a className="links" href="mailto:xiao@linxtion.com?Subject=Yoooooooooooo">
              <i className="ion-android-mail"></i>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }

}



ReactDOM.render(<App />, document.getElementById('container'))


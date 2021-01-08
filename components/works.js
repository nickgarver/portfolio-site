import React, { Component } from 'react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class MyWorks extends Component {
    constructor(props) {
      super(props)
      this.state = {
          activeOne: false,
          activeTwo: false,
          activeThree: false,
          activeFour: false,
          activeFive: false,
          activeSix: false,
          activeSeven: false,
          activeEight: false,
      };
    };
  render() {
    return (
      <div className="my-container">
        <h2>Current Works</h2>
        <div className="grid">

          <div className="card" onClick={ () => this.setState({activeOne: !this.state.activeOne}) }>
            <img className="card-img" src ="https://i.imgur.com/sXKbjpU.png" />
            <div className={`card-info ${this.state.activeOne ? "activate" : ""}`}>
              <a href="https://www.dev.themelodyapp.com/" >
                <span>Melody App</span>
                <FontAwesomeIcon className="card-icn" icon={faChevronRight} />
              </a>
              <p>Audio app created as a better way to find loops. Contributed to database.</p>
            </div>
          </div>

          <div className="card" onClick={ () => this.setState({activeTwo: !this.state.activeTwo}) }>
            <img src ="https://i.imgur.com/PIaNze0.png" />
            <div className={`card-info ${this.state.activeTwo ? "activate" : ""}`}>
              <a href="https://github.com/vuhi/fudo-api" >
                <span>Fudo</span>
                <FontAwesomeIcon className="card-icn" icon={faChevronRight} />
              </a>
              <p>Capstone project built with an Angular, Docker, and MongoDB stack.</p>
            </div>
          </div>

          <div className="card" onClick={ () => this.setState({activeThree: !this.state.activeThree}) }>
            <img src ="https://i.imgur.com/IWc9VdF.png" />
            <div className={`card-info ${this.state.activeThree ? "activate" : ""}`}>
              <a href="https://github.com/nickgarver/mp3toanime" >
                <span>Mp3-to Anime</span>
                <FontAwesomeIcon className="card-icn" icon={faChevronRight} />
              </a>
              <p>React app that converts an mp3 to a fun video. Intended to increase engagement. Work in progress.</p>
            </div>
          </div>

          <div className="card" onClick={ () => this.setState({activeFour: !this.state.activeFour}) }>
            <img src ="https://i.imgur.com/jUcmH5O.jpg" />
            <div className={`card-info ${this.state.activeFour ? "activate" : ""}`}>
              <a href="https://alwayseducation.com" >
                <span>Always </span>
                <FontAwesomeIcon className="card-icn" icon={faChevronRight} />
              </a>
              <p>Next gen educational platfrom. I implimented an adaptive stream video player.</p>
            </div>
          </div>

          <div className="card" onClick={ () => this.setState({activeFive: !this.state.activeFive}) }>
            <img src ="https://i.imgur.com/rFRgzUZ.png" />
            <div className={`card-info ${this.state.activeFive ? "activate" : ""}`}>
              <a href="https://internetboy.world" >
                <span>internetboy</span>
                <FontAwesomeIcon className="card-icn" icon={faChevronRight} />
              </a>
              <p> Ecommerce site for my music project, 'internetboy'. </p>
            </div>
          </div>

          <div className="card" onClick={ () => this.setState({activeSix: !this.state.activeSix}) }>
            <img src ="https://i.imgur.com/JoryhUu.png" />
            <div className={`card-info ${this.state.activeSix ? "activate" : ""}`}>
              <a href="https://hivemindtv.com" >
                <span>Hivemind</span>
                <FontAwesomeIcon className="card-icn" icon={faChevronRight} />
              </a>
              <p> Ecommerce site for a popculture youtube channel. </p>
            </div>
          </div>

          <div className="card" onClick={ () => this.setState({activeSeven: !this.state.activeSeven}) }>
            <img src ="https://i.imgur.com/rwPvcgh.jpg" />
            <div className={`card-info ${this.state.activeSeven ? "activate" : ""}`}>
              <a href="https://github.com/nickgarver/lastboy" >
                <span>Lastboy</span>
                <FontAwesomeIcon className="card-icn" icon={faChevronRight} />
              </a>
              <p> Play me! </p>
            </div>
          </div>

          <div className="card" onClick={ () => this.setState({activeEight: !this.state.activeEight}) }>
            <img src ="https://i.imgur.com/fRBQca1.jpg" />
            <div className={`card-info ${this.state.activeEight ? "activate" : ""}`}>
              <a href="https://codepen.io/islandboyluna/pen/mKwbBd" >
                <span>Tic-Tac-Toe</span>
                <FontAwesomeIcon className="card-icn" icon={faChevronRight} />
              </a>
              <p> Simple game built for school project. </p>
            </div>
          </div>

        </div>
      </div>

    );
  }
}

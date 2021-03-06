import PropTypes from 'prop-types'
import React from 'react'
import weather from "../images/Weather.png"
import veronikas from "../images/veronikas.png"
import withall from "../images/withall.png"
import todo from "../images/todo.png"
import paul from "../images/paul.jpg"
import paulguitar from "../images/paulguitar.jpg"
import blogfolio from "../images/blogfolio.png"


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span>
            <img style={{display:"block",width:"350px",height:"350px",margin:"auto"}}src={paul} alt="" />
          </span>
          <p style={{marginTop:"20px"}}>
           Hiya!  I'm Paul.  I'm an aspiring software developer looking to expand my skillset with the right team. 
           I have one year of software experience and would love the opportunity to grow professionally.    I graduated 
           from the Full Stack Software Developer Bootcamp at Prime Digital Academy in Minneapolis August of 2019.  
           I hope you enjoy my development portfolio!
          </p>
          
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
          <a href="https://paulsblogfolio.herokuapp.com/" target="_blank"><img src={blogfolio}></img>Blogfolio</a> 
          <p>Part blog, part portfolio.  You get it.  This is where the public can view my design work, register as users, and leave comments.</p>
          </span>
          <span className="image main">
          <a href="https://veronikas.herokuapp.com/#/home" target="_blank"><img src={veronikas}></img>Veronikas</a> 
          <p>This was my solo project for Prime Digital Academy.  Veronikas is a web based art gallery where users can see what pieces are available for viewing, and learn a little about the artists.</p>
          </span>
          <span className="image main">
          <a href="https://paulsweatherapp.herokuapp.com" target="_blank"><img src={weather}></img>What's the Weather Like?</a>   
          <p>A weather app I made recently.  I wanted to do something that used APIs, a little animation, and some fun conditional rendering. </p>      
          </span>
          <span className="image main">
          <a target="_blank" href="https://what-to-say-group.herokuapp.com/#/home"><img src={withall}></img>What to Say Now</a> 
          <p>"What To Say Now" is the group project I worked on at Prime.  It is an online resource for coaches and mentors to help communicate body positive messages to their students.</p>
          </span>
          <span className="image main">
          <a target="_blank" href="https://pauls-weekend-to-do-list.herokuapp.com/"><img src={todo}></img>Weekend Todo List</a> 
          <p>My first todo list!  A rite of pasage for any software programmer. </p>
          </span>
         
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span>
            <img style={{display:"block", width: "300px", height:"450px", margin:"auto"}}src={paulguitar} alt="" />
          </span>
          <p style={{marginTop:"20px"}}>
            So a little bit about me.  I'm a Minnesota native.  I love being outdoors and enjoying all majesty of my home state.
            My interests include playing guitar, painting, reading, doing Brazilian Jiu Jitsu, and trying to think of cool apps to build.  
            Being creative with problem solving is my favorite part of development.  I find a thrill in the challenge of investigation.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          
      <form method="post" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="bot-field" />
          <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://www.facebook.com/paul.molnar.3551" target="_blank" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jpaul1982"target="_blank" 
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/paul-molnar-b0993a187/"target="_blank" 
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

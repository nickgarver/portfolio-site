import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About(){
  return (
    <div className="my-container">
      <img className="presspic" src="https://i.imgur.com/zE2vllP.jpg" alt="Nick Garver press photo"/>
      <div className="pressgrid">
        <div>
          <h2 className="pressheader">Hello!</h2>
        </div>
        <p className="pressbio" >
        Hello! I am Nick, an IT graduate at the University of Cincinnati.
        I am always seeking new opportunities to learn, collaborate,
        and explore. Currently I have been doing freelance web design
        and working for 'Hivemind' to stay up to date with current practices. 
        Living in Detroit I also do part time cultivation for a Cannabis company; 
        I am always learing about the ever growing cannabis industry.
        Feel free to reach out with any questions about
        my work, experiences, or just to chat.
        </p>
        <a className="resume" href="https://docs.google.com/document/d/1Q4aZ7jC4-XTd0r3ZLu2nIEbHr-Tnk9KlSV8k3lPXeOw/edit?usp=sharing">
          <FontAwesomeIcon className="resumeicn" icon={faFileAlt} />
          <span className="resumetxt">Resume</span>
        </a>
      </div>
    </div>
  )
}

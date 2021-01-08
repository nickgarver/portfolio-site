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
        I'm Nick, an IT graduate at the University of Cincinnati.
        I am always seeking new opportunities to learn, collaborate,
        and explore. Currently I have been doing freelance web design
        and working for 'Melody App' to stay up to date with current practices.
         Feel free to reach out with any questions about
        my work, experiences, or just to chat.
        </p>
        <a className="resume" href="https://drive.google.com/file/d/1kZ09maI29D8Hrctr45s-6Z4iKt8wv35v/view?usp=sharing">
          <FontAwesomeIcon className="resumeicn" icon={faFileAlt} />
          <span className="resumetxt">Resume</span>
        </a>
      </div>
    </div>
  )
}

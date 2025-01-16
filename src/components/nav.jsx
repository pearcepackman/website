import './nav.css';
import logo from './pics/realorange.png';
import github from './pics/github.png';
import linkedin from './pics/linkedin.png';
import {Projects} from './projects';
import { Contact } from './contact';


export function nav() {
    return (
    <div className = "Nav">
      <header className="Nav-header">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <img src={logo} className="headshot" alt="logo"/>
        <p className = "Nav-name">
          Pearce Packman
        </p>
        <p className = "Nav-desc">
          Hello, my name is Pearce and this is my first foray into web development! <br /> I hope to learn more during my time at UMBC!
          <br /> This website was created used Javascript, React, and CSS! 
        </p>
        <hr className = "line"/>
        
        
        
        <p className = "helpful_links">
            Helpful Links
        </p>
        <a href = "https://github.com/pearcepackman" target = "_blank" rel="noreferrer">
        
        <img src = {github} className = "github" alt = "logo" />
        </a>
        <a href = "https://www.linkedin.com/in/pearce-packman/" target = "_blank" rel="noreferrer">
        <img src = {linkedin} className = "linkedin" alt = "linkedin" />
        </a>


        <Projects/>
        <Contact/>
      
      </header>
    </div>

    );



}
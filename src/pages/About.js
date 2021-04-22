import '../assets/styles/About.scss'
import draw from '../assets/img/draw.svg'
import tools from '../assets/img/tools.svg'
import maintenance from '../assets/img/maintance.svg'

const About = () => {
  return `
    <div class="title__container">
      <h1 class="title">ABOUT ME</h1>
    </div>
    <p>Hi there 👋 <br>
    Heyy!! It's me Jhon Trillos, developer, tech lover and continuous student.
    <br>
    I’m currently working on Sotfware Company with Financial tech.</p>
    <div class="hero__divider-container">
      <div class="line-divider"></div>
      <span></span>
      <span></span>
      <span></span>
      <div class="line-divider"></div>
    </div>
    <h2><img src="${draw}" width="30" height="30">Design</h2>
    <p class="about__details">I can design the website based on your needs and suggestions. I can also create it from scratch by consulting with you during work.
    </p>
    <h2><img src="${tools}" width="30" height="30">Development</h2>
    <p class="about__details">Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive.
    </p>
    <h2><img src="${maintenance}" width="30" height="30">Maintenance</h2>
    <p class="about__details">In case of any problems or the need for changes, I can introduce new functionalities and solutions.
    </p>
  `
}

export default About

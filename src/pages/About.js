import '../assets/styles/About.scss'
import draw from '../assets/img/draw.svg'
import tools from '../assets/img/tools.svg'
import maintenance from '../assets/img/maintance.svg'

const About = () => {
  return `
    <div class="title__container">
      <h1 class="title">ABOUT ME</h1>
    </div>
    <p class="about__me_details">Hi there 👋 <br><br>
    Soy Jhon Trillos, Front End developer, apasionado por la tecnología y una persona que está aprendiendo constantemente. Hace más de 4 años que trabajo en una startup de banca financiera desarrollando y liderando proyectos en las principales entidades bancarias de mi país.
    
    Electrónico de profesión con más de 7 años de experiencia en el área de desarrollo.</p>
    <p class="about__me_details">Me considero una persona constante y muy persistente. Si gustas, mira <a href="#portfolio">mi trabajo</a>, si te gusta y tienes una idea, charlemos (<a href="https://www.instagram.com/codejjguitar" target="_blank">instagram</a>, <a href="https://www.linkedin.com/in/jhon-jairo-enrique-trillos-alvarez-68b128148/" target="_blank">
    linkedin</a>), tengo a tu disposición muchas herremientas para hacerla realidad.</p>
    <div class="hero__divider-container">
      <div class="line-divider"></div>
      <span></span>
      <span></span>
      <span></span>
      <div class="line-divider"></div>
    </div>
    <div class="about-container__work">
      <div class="about__work">
        <h2><img src="${draw}" width="30" height="30">Design</h2>
        <p class="about__details">I can design the website based on your needs and suggestions. I can also create it from scratch by consulting with you during work.
        </p>
      </div>
      <div class="about__work">
        <h2><img src="${tools}" width="30" height="30">Development</h2>
        <p class="about__details">Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive.
        </p>
      </div>
      <div class="about__work">
        <h2><img src="${maintenance}" width="30" height="30">Maintenance</h2>
        <p class="about__details">In case of any problems or the need for changes, I can introduce new functionalities and solutions.
        </p>
      </div>
    </div>
  `
}

export default About

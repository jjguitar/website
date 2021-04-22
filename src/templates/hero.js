import '../assets/styles/Hero.scss'
import background from '../assets/img/landscape.jpg'
import github from '../assets/img/icon-github.svg'
import linkedIn from '../assets/img/linkedin.svg'
import instagram from '../assets/img/instagram.svg'

const hero = () => {
  return `
    <div class="hero" style="background: linear-gradient(0deg,rgba(0,0,0,.7),rgba(19,19,19,.7) 75%,rgba(33,33,33,.7)),url(${background}); background-position: center;background-attachment: scroll; background-repeat: no-repeat;">
      <h1>Hey, I'm Jhon</h1>
      <h2>Front End developer</h2>
      <div class="hero__divider-container">
        <div class="line-divider"></div>
        <span></span>
        <span></span>
        <span></span>
        <div class="line-divider"></div>
      </div>
      <div class="hero__social-media">
        <a href="https://www.instagram.com/codejjguitar">
          <img src="${instagram}" width="40" height="40" alt="instagram">
        </a>
        <a href="https://www.linkedin.com/in/jhon-jairo-enrique-trillos-alvarez-68b128148/">
          <img src="${linkedIn}" width="40" height="40" alt="linkedIn">
        </a>
        <a href="https://github.com/jjguitar">
          <img src="${github}" width="40" height="40" alt="github">
        </a>
      </div>
      <div class="arrow__container">
        <div class="arrow-down"></div>
      </div>
    </div>
  `
}

export default hero

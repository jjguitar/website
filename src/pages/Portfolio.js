import '../assets/styles/Portfolio.scss'
import portfolio from '../assets/img/portfolioDivider.jpg'
import pr1 from '../assets/img/pr1.jpg'

const Portfolio = () => {
  return `
    <div class="portfolio__divider" style="background: linear-gradient(
      0deg,rgba(0,0,0,.5),rgba(19,19,19,.5) 75%,rgba(33,33,33,.5)), url(${portfolio}); background-repeat: no-repeat; background-position: center; background-size: cover;">
      <h1 class="title">PORTFOLIO</h1>
    </div>
    <div class="portfolio__container">
      <div class="portfolio-item">
        <div class="portfolio-card-info">
          <div><h1>Spuntify</h1></div>
          <div><h3><a href="https://jjguitar.github.io/spuntify/" target="_BLANK">Demo</a></h3><h3><a href="https://github.com/jjguitar/spuntify" target="_BLANK">Code</a></h3></div>
          <div><h4>JavaScript</h4><h4>HTML</h4><h4>CSS</h4></div>
        </div>
        <div class="portfolio-card">
          <img src="${pr1}" width="320" height="200">
        </div>
      </div>
    </div>
  `
}

export default Portfolio

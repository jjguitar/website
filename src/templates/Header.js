import '../assets/styles/Header.scss';

const Header = () => {
  return `
      <nav class="navbar">
      <div class="hamburger_menu">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
      </div>
      <ul class="nav-list">
        <li class="nav-item">
          <a href="#about" class="nav-link">About me</a>
        </li>
        <li class="nav-item">
          <a href="#portfolio" class="nav-link">Portfolio</a>
        </li>
        <li class="nav-item">
          <a href="#footer" class="nav-link">Contact me</a>
        </li>
      </ul>
    </nav>
  `
}

export default Header

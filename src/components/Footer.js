// Import SVG's
import { CheckAllSvg, gearSvg } from "../assets/svg/svg-icons.js";

const Footer = () => {
  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footer')
  footer.classList.add('footer')
  
  footer.innerHTML = `
    <nav class="footer_nav">
      <ul class="footer_nav_list">
        <li>
          <button class="select_all_btn button" id="select-all-btn">
            ${CheckAllSvg}
          </button>
        </li>
        <li>
          <button class="settings_btn button" id="settings-btn">
            ${gearSvg}
          </button>
        </li>
      </ul>
    </nav>
  `;

  return footer;
}

export default Footer;

const Footer = () => {
  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footer')
  footer.classList.add('footer')
  
  footer.innerHTML = `
    <nav class="footer_nav">
      <ul class="footer_nav_list">
        <li>
          <button class="button">Select all</button>
        </li>
        <li>
          <button class="button">Settings</button>
        </li>
      </ul>
    </nav>
  `;

  return footer;
}

export default Footer;
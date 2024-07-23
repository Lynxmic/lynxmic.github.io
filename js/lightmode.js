function toggleLightMode() {
    const currentMode = document.documentElement.getAttribute('data-theme');
    const newMode = currentMode === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newMode);
    localStorage.setItem('theme', newMode);

    const logoImg = document.getElementById('logo');
 if (newMode === 'light') {
  logoImg.src = '../lynxwebsite/img/wordmark light.svg';
  localStorage.setItem('logoMode', 'light');
  } else {
  logoImg.src = '../lynxwebsite/img/wordmark.svg';
  localStorage.setItem('logoMode', 'dark');
}
}  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', systemTheme);
  }

const savedLogoMode = localStorage.getItem('logoMode');
const logoImg = document.getElementById('logo');
if (savedLogoMode === 'light') {
    logoImg.src = '../lynxwebsite/img/wordmark light.svg';
}
  
  const toggleButton = document.querySelector('#lightModeToggle');
  toggleButton.addEventListener('click', toggleLightMode);
  

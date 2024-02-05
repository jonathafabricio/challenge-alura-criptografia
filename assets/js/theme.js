function switchTheme(themeName) {
  document.documentElement.className = themeName; 
  changeBackgroundImage(themeName);
  updatePaletaIcon(themeName);
}

function updatePaletaIcon(themeName) {
  const paletaIconPath = getComputedStyle(document.documentElement).getPropertyValue(`--background-paleta`).trim();
  document.querySelector('.icon-right').src = paletaIconPath;
}

function changeBackgroundImage(themeName) {
  const backgroundImage = getComputedStyle(document.documentElement).getPropertyValue(`--background-image-${themeName}`);
  document.querySelector('.matrix-image').style.backgroundImage = `url(${backgroundImage})`;
}

function saveThemeSelection(themeName) {
  localStorage.setItem('selectedTheme', themeName);
  switchTheme(themeName);
}

document.addEventListener('DOMContentLoaded', (event) => {
  const savedTheme = localStorage.getItem('selectedTheme') || 'theme-1';
  switchTheme(savedTheme);
});

function toggleDropdown() {
  var icon = document.querySelector('.icon-right');
  var optionsList = document.getElementById("theme-options");

  icon.classList.add('spin-animation');

  setTimeout(function() {
    icon.classList.remove('spin-animation');

    if (optionsList.style.display === "flex") {
      optionsList.style.display = "none";
    } else {
      optionsList.style.display = "flex";

      optionsList.querySelectorAll('li').forEach((item, index) => {
        item.style.animation = 'none'; 
        item.offsetHeight;
        item.style.animation = null;

        setTimeout(() => {
          item.style.animation = `dropIn 0.5s ease forwards ${index * 100}ms`; 
          item.style.opacity = 1; 
        }, 50);
      });
    }
  }, 500);
}

document.querySelector('.icon-right').addEventListener('click', function(event) {
  toggleDropdown();
  event.stopPropagation();
});

document.addEventListener('click', function(event) {
  var optionsList = document.getElementById("theme-options");
  if (!event.target.matches('.icon-right')) {
    optionsList.style.display = 'none';
  }
});

document.querySelectorAll('#theme-options li').forEach(function(item) {
  item.addEventListener('click', function() {
    const themeName = this.getAttribute('data-value');
    saveThemeSelection(themeName); 
    document.getElementById("theme-options").style.display = 'none';
  });
});
document.querySelectorAll('.theme-button').forEach(button => {
    button.addEventListener('click', function() {
        const themeName = this.getAttribute('data-theme');
        switchTheme(themeName);
    });
});

function switchTheme(themeName) {
    document.documentElement.className = themeName;
    updateParticlesConfig();
}

function updateParticlesConfig() {
    var rootStyle = getComputedStyle(document.documentElement);
    var particlesColor = rootStyle.getPropertyValue('--particles-color').trim() || '#ffffff';
    var particlesLineColor = rootStyle.getPropertyValue('--particles-line-color').trim() || '#009900';

    particlesJS('particles-js', {
            "particles": {
              "number": {
                "value": 30,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": particlesColor
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 10,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 80,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 300,
                "color": particlesLineColor,
                "opacity": 0.4,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "window",
              "events": {
                "onhover": {
                  "enable": true, 
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": false,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 800,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 800,
                  "size": 80,
                  "duration": 2,
                  "opacity": 0.8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }
   )
}

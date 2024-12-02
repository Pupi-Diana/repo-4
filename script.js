function animateTitle() {
    const title = document.getElementById('title');
    let direction = 'up'; // Inicializamos la dirección del movimiento
  
    setInterval(() => {
      if (direction === 'up') {
        title.style.transform = 'translateY(-10px)';
        direction = 'down';
      } else {
        title.style.transform = 'translateY(0)';
        direction = 'up';
      }
    }, 1000); // Cambia la dirección cada segundo-1
  }
  
  animateTitle();

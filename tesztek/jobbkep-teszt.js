function checkJobbkepImage() {
    const images = document.querySelectorAll('.jobbkep');
  
    let found = false;
  
    images.forEach((image) => {
      const title = image.getAttribute('title');
      const alt = image.getAttribute('alt');
  
      if (title && alt && title === 'Éhes fiókák' && alt === 'Éhes fiókák') {
        found = true;
      }
    });
  
    if (found) {
      console.log('Az oldalon található "jobbkep" osztállyal formázott kép, amelynek "title" és "alt" attribútuma is helyes.');
    } else {
      console.error('Hiba: Az oldalon nincs "jobbkep" osztállyal formázott kép, vagy a "title" és "alt" attribútumai nem megfelelőek.');
    }
  }
  
  // Az oldal betöltésekor futtatjuk a tesztet
  window.addEventListener('load', checkJobbkepImage);
  
function checkBalkepImage() {
    const images = document.querySelectorAll('.balkep');
  
    let found = false;
  
    images.forEach((image) => {
      const title = image.getAttribute('title');
      const alt = image.getAttribute('alt');
  
      if (title && alt && title === 'búbos banka rajz' && alt === 'búbos banka rajz') {
        found = true;
      }
    });
  
    if (found) {
      console.log('Az oldalon található "balkep" osztállyal formázott kép, amelynek "title" és "alt" attribútuma is helyes.');
    } else {
      console.error('Hiba: Az oldalon nincs "balkep" osztállyal formázott kép, vagy a "title" és "alt" attribútumai nem megfelelőek.');
    }
  }
  
  // Az oldal betöltésekor futtatjuk a tesztet
  window.addEventListener('load', checkBalkepImage);
  
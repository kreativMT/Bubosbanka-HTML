function checkPageLanguage() {
    const htmlElement = document.querySelector('html');
    const pageLanguage = htmlElement.getAttribute('lang');
    
    if (pageLanguage === 'hu') {
      console.log('Az oldal nyelve magyar.');
    } else {
      console.error('Hiba: Az oldal nyelve nem magyar.');
    }
  }
  
  // Az oldal betöltésekor futtatjuk a tesztet
  window.addEventListener('load', checkPageLanguage);
  
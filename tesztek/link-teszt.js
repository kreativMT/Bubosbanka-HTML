function checkFooterLink() {
    const footerElement = document.querySelector('footer');
    
    if (footerElement) {
      const linkElement = footerElement.querySelector('a');
      
      if (linkElement) {
        if (linkElement.href === 'http://www.mme.hu/magyarorszagmadarai/madaradatbazis-upuepo') {
          console.log('A footer-ben található link megfelelő, és az oldalra mutat.');
        } else {
          console.error('Hiba: A link nem a megadott oldalra mutat.');
        }
      } else {
        console.error('Hiba: A footer-ben hiányzik a link elem.');
      }
    } else {
      console.error('Hiba: Az oldalon hiányzik a footer elem.');
    }
  }
  
  // Az oldal betöltésekor futtatjuk a tesztet
  window.addEventListener('load', checkFooterLink);
  
function checkMainContent() {
    const mainElement = document.querySelector('main');
    
    if (mainElement) {
      const headerElement = mainElement.querySelector('header');
      const sectionElement = mainElement.querySelector('section');
      const footerElement = mainElement.querySelector('footer');
      
      if (headerElement && sectionElement && footerElement) {
        console.log('Az oldalon megtalálható a main elem, header, section és footer elemek is.');
      } else {
        console.error('Hiba: A main elemen belül hiányzik header, section vagy footer elem.');
      }
    } else {
      console.error('Hiba: Az oldalon hiányzik a main elem.');
    }
  }
  
  // Az oldal betöltésekor futtatjuk a tesztet
  window.addEventListener('load', checkMainContent);
  
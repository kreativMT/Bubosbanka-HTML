function checkHeadingsInSection() {
    const sectionElement = document.querySelector('section');
    
    if (sectionElement) {
      const h1Element = sectionElement.querySelector('h1');
      const h2Elements = sectionElement.querySelectorAll('h2');
      
      if (h1Element && h2Elements.length >= 4) {
        if (h1Element.textContent === 'Búbos banka') {
          console.log('Az oldalon megtalálható legalább egy h1 cím és legalább négy h2 cím a section elemen belül.');
        } else {
          console.error('Hiba: Az h1 cím tartalma nem megfelelő (Búbos banka).');
        }
      } else {
        console.error('Hiba: Az oldalon hiányzik az h1 cím vagy legalább négy h2 cím a section elemen belül.');
      }
    } else {
      console.error('Hiba: Az oldalon hiányzik a section elem.');
    }
  }
  
  // Az oldal betöltésekor futtatjuk a tesztet
  window.addEventListener('load', checkHeadingsInSection);
  
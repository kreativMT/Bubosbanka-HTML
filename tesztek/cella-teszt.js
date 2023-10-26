function checkHeaderCell() {
    const headerCells = document.querySelectorAll('.fejsor');
  
    for (const cell of headerCells) {
      if (cell.getAttribute('colspan') === '2') {
        console.log('A "fejsor" osztállyal kijelölt cella colspan="2" attribútummal rendelkezik.');
        return;  // Mivel találtunk egy megfelelő cellát, kilépünk a függvényből.
      }
    }
  
    console.error('Hiba: Az oldalon nincs olyan "fejsor" osztálykijelölésű cella, amely colspan="2" attribútummal lenne ellátva.');
  }
  
  // Az oldal betöltésekor futtatjuk a tesztet
  window.addEventListener('load', checkHeaderCell);
  
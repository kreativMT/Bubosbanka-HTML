function checkTableRows() {
    const tables = document.querySelectorAll('table');
  
    tables.forEach((table) => {
      const rows = table.querySelectorAll('tr');
  
      if (rows.length === 6) {
        console.log('Az oldalon található táblázatban pontosan 6 sor van.');
      } else {
        console.error('Hiba: Az oldalon található táblázatban nem 6 sor található.');
      }
    });
  }
  
  // Az oldal betöltésekor futtatjuk a tesztet
  window.addEventListener('load', checkTableRows);
  
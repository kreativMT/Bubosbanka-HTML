function checkPageTitle() {
  const pageTitle = document.querySelector('title');
  
  if (pageTitle && pageTitle.textContent.trim() === 'Búbos banka') {
    console.log('A title tag tartalma helyes: "Búbos banka".');
  } else {
    console.error('Hiba: A title tag nem található, vagy a tartalma nem megfelelő.');
  }
}

// Az oldal betöltésekor futtatjuk a tesztet
window.addEventListener('load', checkPageTitle);

  
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/custom-sw.js')
      .then((reg) => {
        console.log('Service worker registered.', reg);
      });
  });
}

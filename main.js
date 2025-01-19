javascript: (() => {
   const selector = '#read-only-cursor-text-area';
   const html = document.querySelector(selector)?.value;

   if (!html) {
     return alert(`Error: element ${selector} not found`);
  }

  document.open();
  document.write(html);
  document.close();
})();

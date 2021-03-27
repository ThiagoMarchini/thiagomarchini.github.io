window.onload = function () {
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('accordion')) { 
      event.target.classList.toggle('active');
      event.target.nextElementSibling.classList.toggle('show');
    }
  });
}
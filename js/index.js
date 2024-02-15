// Applying current year to the copyright year span element
const yearContainer1 = document.querySelector('.copyright-year');
const yearContainer2 = document.querySelector('.copyright');
let currentYear = new Date().getFullYear();
yearContainer1.textContent = currentYear;
yearContainer2.textContent = currentYear;

// Mobile menu feature
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  btn.classList.toggle('close-icon');
  nav.classList.toggle('hidden');
});

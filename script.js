const btnDepoimentos = document.querySelector('.btn-depoimentos');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');





btnDepoimentos.addEventListener('click', () => {
  modal.style.display = 'block';
  
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
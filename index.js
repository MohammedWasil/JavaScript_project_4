const modal = document.getElementById('myModal');
const overlay = document.getElementById('overlay');
const closeModalBtn = document.getElementById('closeModalBtn');

const openModalBtn = document.getElementById('openModalBtn');

function openModal() {
  modal.style.display = 'block';
  overlay.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
}
openModalBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);






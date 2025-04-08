
const images = ["about-picture.jpg", "contact-picture.jpg", "i.webp"];
let currentImageIndex = 0;


const galleryImage = document.querySelector('.gallery img');
const nextButton = document.querySelector('#next'); 
const prevButton = document.querySelector('#prev');

function updateImage() {
    galleryImage.src = images[currentImageIndex];
    galleryImage.alt = `Image ${currentImageIndex + 1}`;
}


nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
});


updateImage();

const modal = document.createElement('div');
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.top = '50%';
modal.style.left = '50%';
modal.style.transform = 'translate(-50%, -50%)';
modal.style.background = 'rgba(0, 0, 0, 0.8)';
modal.style.padding = '20px';
modal.style.color = 'white';
modal.style.borderRadius = '8px';

const modalContent = document.createElement('p');
modalContent.textContent = 'Это всплывающее окно!';
modal.appendChild(modalContent);

const closeModal = document.createElement('button');
closeModal.textContent = 'Закрыть';
closeModal.style.marginTop = '10px';
modal.appendChild(closeModal);

document.body.appendChild(modal);


closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

const openModalButton = document.querySelector('#openModal'); 

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

const contentParagraph = document.querySelector('.highlight');
contentParagraph.addEventListener('click', () => {
    contentParagraph.textContent = '';
});




/*
document.addEventListener("DOMContentLoaded", () => {
    const resetBtn = document.getElementById("resetBtn");

    resetBtn.addEventListener("click", (event) => {
        const isConfirmed = confirm("Вы уверены, что хотите сбросить форму?");
        if (!isConfirmed) {
            event.preventDefault(); // Отмена действия сброса
        }
    });
});
*/
document.addEventListener('DOMContentLoaded', () => {
    const sliderButton = document.getElementById('sliderButton');
    const imagePlaceholder = document.getElementById('imagePlaceholder');
    let currentImage = 0;

    const images = [
        'assets/images1/1.jpg',
        'assets/images1/2.jpg',
        'assets/images1/3.jpg'
    ];

    function createImageSlots() {
        imagePlaceholder.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const slot = document.createElement('div');
            slot.className = 'image-slot';
            imagePlaceholder.appendChild(slot);
        }
    }

    function loadImage(url, slot) {
        const img = new Image();
        img.onload = () => {
            slot.style.backgroundImage = `url('${url}')`;
            slot.classList.add('filled');
        };
        img.onerror = () => {
            console.error(`Failed to load image: ${url}`);
            slot.textContent = 'Image failed to load';
        };
        img.src = url;
    }

    createImageSlots();

    sliderButton.addEventListener('click', () => {
        const slots = document.getElementsByClassName('image-slot');
        if (currentImage < images.length) {
            loadImage(images[currentImage], slots[currentImage]);
            currentImage++;
            sliderButton.textContent = `Show Next Image (${currentImage}/3)`;

            if (currentImage === images.length) {
                sliderButton.textContent = 'All Images Shown!';
                sliderButton.disabled = true;
            }
        }
    });
});
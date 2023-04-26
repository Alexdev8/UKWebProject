const myImage = document.querySelector('.my-image');

myImage.addEventListener('mouseover', () => {
    myImage.style.transform = 'scale(1.2)';
});

myImage.addEventListener('mouseout', () => {
    myImage.style.transform = 'scale(1)';
});
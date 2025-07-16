
const tText = document.getElementById('transparentText');
const button = document.getElementById('expandButtonDiv');

button.addEventListener('click', () => {
    if (!tText.classList.contains('visible')) {
        tText.style.display = 'block'; // Make the element visible
        setTimeout(() => tText.classList.add('visible'), 0); // Add transition effect after display update
    } else {
        tText.classList.remove('visible'); // Remove transition effect
        setTimeout(() => tText.style.display = 'none', 500); // Hide the element after transition completes
    }
});

const tText1 = document.getElementById('codeDiv');
tText1.style.display = 'none';

button.addEventListener('click', () => {
    if (!tText1.classList.contains('visible')) {
        tText1.style.display = 'block'; // Make the element visible
        setTimeout(() => tText1.classList.add('visible'), 0); // Add transition effect after display update
    } else {
        tText1.classList.remove('visible'); // Remove transition effect
        setTimeout(() => tText1.style.display = 'none', 500); // Hide the element after transition completes
    }
});




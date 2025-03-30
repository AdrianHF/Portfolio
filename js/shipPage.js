
const tText = document.getElementById('transparentText');
const button = document.getElementById('expandButton');

button.addEventListener('click', () => {
    if (!tText.classList.contains('visible')) {
        tText.style.display = 'block'; // Make the element visible
        setTimeout(() => tText.classList.add('visible'), 0); // Add transition effect after display update
    } else {
        tText.classList.remove('visible'); // Remove transition effect
        setTimeout(() => tText.style.display = 'none', 500); // Hide the element after transition completes
    }
});
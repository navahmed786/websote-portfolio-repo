
// Function to handle navigation menu
function toggleMenu() {
    const nav = document.querySelector('header nav ul');
    nav.classList.toggle('active');
}

// Event listener for the navigation menu
document.querySelector('.menu-btn').addEventListener('click', toggleMenu);
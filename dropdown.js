// remove active
document.querySelector('.mob-nav').addEventListener('click', () => {
    document.querySelectorAll('.menu-item').forEach((menuItem) => {
        menuItem.classList.remove('active');
    });
});

// add active
document.querySelectorAll('.menu-item').forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        setTimeout(() => {
            menuItem.classList.add('active');
        }, 0.01);
    });
});
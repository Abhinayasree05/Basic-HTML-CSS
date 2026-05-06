const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const navLinkItems = document.querySelectorAll('.nav-links li');
navLinkItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
btn.addEventListener('click', () => {
    btn.style.backgroundColor = 'red';
});

btn.addEventListener('contextmenu', () => {
    btn.style.transform= 'scale(1.1)';
    btn.style.transition="0.5s";
});
const btn=document.getElementById('vhee');

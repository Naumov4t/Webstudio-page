let openBtn = document.querySelector('.openBtn');
let closeBtn = document.querySelector('.closeBtn');
let navMenu = document.querySelector('.menu')

openBtn.addEventListener('click', function(){
    openBtn.style.display = 'none';
    closeBtn.style.display = 'flex';
    navMenu.style.display = 'flex';
});

closeBtn.addEventListener('click', function(){
    closeBtn.style.display = 'none';
    openBtn.style.display = 'flex';
    navMenu.style.display = 'none';
})
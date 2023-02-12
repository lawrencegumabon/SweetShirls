const burger = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu-list');
const closeBtn = document.querySelector('.fa-times');

burger.addEventListener('click', function(){
    menu.classList.toggle('hidden');
});

closeBtn.addEventListener('click', function(){
    menu.classList.toggle('hidden');
});
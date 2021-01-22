let burger = document.querySelector(".burger-menu");
console.log (burger);
let maNav = document.querySelector(".main-nav");
console.log (maNav);

burger.addEventListener('click', function () {
    burger.classList.toggle('active')
    maNav.classList.toggle('active')
});


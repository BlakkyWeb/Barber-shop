const menuBtn = document.querySelector('.menu-btn');
const sideNav = document.querySelector('.sideNav');

menuBtn.addEventListener('click', ()=>{
    if(sideNav.style.right === '-100%'){
        sideNav.style.right = '0';
        sideNav.style.opacity = '1';
        menuBtn.src = './Barber_Shop_img/close.png';
    }else{
        sideNav.style.opacity = '0';
        menuBtn.src = './Barber_Shop_img/menu.png';
        sideNav.style.right = '-100%';
    }

})
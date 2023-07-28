const mobileMenuBtnElement =document.getElementById('mobile-menu-btn');
const mobileMenuElement=document.getElementById('mobile-menu');
function toggleMobileMenu(){
    mobileMenuBtnElement.classList.toggle('open')
}

mobileMenuBtnElement.addEventListener('click',toggleMobileMenu);
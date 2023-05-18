const mobilenavLinks=document.querySelector('.mobile-nav-links');
const hamburgerBtn=document.querySelector('.hamburger-menu');
let open=false;
hamburgerBtn.addEventListener('click',()=>{
    if(!open){
        mobilenavLinks.style.display="block";
        open=true;
    }
    else{
        mobilenavLinks.style.display="none";
        open=false;

    }
})
window.addEventListener('click',(event)=>{
    if ((!hamburgerBtn.contains(event.target)) && (!mobilenavLinks.contains(event.target)) && (open)) {
        mobilenavLinks.style.display = "none";
        open = false;
    }
})
console.log(open);
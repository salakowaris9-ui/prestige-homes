// Smooth scroll for navigation links
document.querySelectorAll('a[href="#"]').forEach(link=>{
    link.addEventListener('click',function(e){
        e.preventDefault();

        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    });
});

// Fade cards when page loads
window.addEventListener('load',()=>{

const cards=document.querySelectorAll('.card');

cards.forEach((card,index)=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition=".8s";
card.style.opacity="1";
card.style.transform="translateY(0)";

},index*250);

});

});
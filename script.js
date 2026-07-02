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

const counters = document.querySelectorAll('.counter');

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute('data-target');

const count=+counter.innerText;

const increment=target/80;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

}

update();

});

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");

  if (window.scrollY > 80) {
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.left = "0";
    nav.style.background = "#08131f";
    nav.style.width = "100%";
    nav.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
  } else {
    nav.style.position = "absolute";
    nav.style.background = "transparent";
    nav.style.boxShadow = "none";
  }
});
const el = document.querySelector("nav")
const observer = new IntersectionObserver( 
([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
{ threshold: [1] }
);

observer.observe(el);

//credit : https://css-tricks.com/how-to-detect-when-a-sticky-element-gets-pinned/


setTimeout(function(){
    el.classList.remove("load");
},500);

'use strict';/* scrollReaveのん */
ScrollReveal().reveal('.huwa',{duration:3000,reset:true});/* for h1 */
ScrollReveal().reveal('.slide',{distance:'300px',origin:'left',reset:true});/* for h2 */
ScrollReveal().reveal('h3',{interval:200,distance:'400px',origin:'left',reset:true});/*h３*/
ScrollReveal().reveal('.logo1,.logo2,.logo3,.logo4,.logo5,.logo6,.logo7,.logo8',{interval:200,distance:'10px',origin:'top',reset:true});/* loggos */
ScrollReveal().reveal('.right',{duration:3000,distance:'50px',origin:'left',reset:true});/* for .right*/
/* TOPへもどるbtn */
const botan = document.querySelector('#arrow');
botan.addEventListener('click',scroll_to_top);
function scroll_to_top(){
  window.scroll({top: 0, behavior: 'smooth'});
};
window.addEventListener('scroll',scroll_event);
function scroll_event(){
  if(window.pageYOffset > 400){
    botan.style.opacity = '1';
  }else if(window.pageYOffset < 400){
    botan.style.opacity = '0';
  }
};

/* レスポンシブバー*/
let startPos = 0, winScrollTop = 0;
window.addEventListener('scroll', ()=>{
    winScrollTop = this.scrollY;
    if (winScrollTop > startPos) {
        if (winScrollTop > 300) {
          document.getElementById('bottomBar').classList.remove('hidden');
        }
      } else {
        document.getElementById('bottomBar').classList.add('hidden');
    }
    startPos = winScrollTop;
});

/* レスポンシブ背景 */
if (window.matchMedia('(max-width: 599px)').matches) {
  window.addEventListener("scroll", ()=> {/* for backgroundColor */
    let scroll = window.pageYOffset;
  
    if (scroll > 10000) {
      document.body.style.backgroundColor = '#223843';
      /* contact */
    } else if (scroll > 5400) {
      document.body.style.backgroundColor = '#223843';/* contact */
    } else if (scroll > 1000) {
      document.body.style.backgroundColor = '#fff';/* works #fff*/
    } else if (scroll > 300) {
      document.body.style.backgroundColor = '#DBD3D8';/* me */
    } else {
      document.body.style.backgroundColor = '#D77A61';/* header */
    }
  });
} else if (window.matchMedia('(min-width:768px)').matches) {
  window.addEventListener("scroll", ()=> {/* for backgroundColor */
    let scroll = window.pageYOffset;
  
    if (scroll > 10000) {
      document.body.style.backgroundColor = '#223843';
      /* contact */
    } else if (scroll > 5700) {
      document.body.style.backgroundColor = '#223843';/* contact */
    } else if (scroll > 1300) {
      document.body.style.backgroundColor = '#fff';/* works #fff*/
    } else if (scroll > 300) {
      document.body.style.backgroundColor = '#DBD3D8';/* me */
    } else {
      document.body.style.backgroundColor = '#D77A61';/* header */
    }
  });
}
window.onload = switchByWidth;
window.onresize = switchByWidth;

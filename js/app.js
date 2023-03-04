//DOM Acces
const hambBtn = document.getElementById('hamb');
const ul = document.getElementById('ulMobile');

hambBtn.addEventListener('click', ()=>{
   if (ul.classList.contains('ul-show' )) {
    ul.classList.remove('ul-show');
    hambBtn.classList.add('rotate0');
    hambBtn.classList.remove('rotate90')
}else{
    ul.classList.add('ul-show')
    hambBtn.classList.add('rotate90')
    hambBtn.classList.remove('rotate0')
   }


});
let menuBtn = document.querySelector('.button');
let menu = document.querySelector('.menu');
let center = document.querySelector('.gh');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
  center.classList.toggle('active');
})
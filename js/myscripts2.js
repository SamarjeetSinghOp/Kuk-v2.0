let slideIndex=0;async function nextSlide(){slideIndex++,showSlides(),timer=_timer}async function prevSlide(){slideIndex--,showSlides(),timer=_timer}async function currentSlide(e){slideIndex=e-1,showSlides(),timer=_timer}async function showSlides(){let e=document.querySelectorAll(".mySlides"),i=document.querySelectorAll(".dots");slideIndex>e.length-1&&(slideIndex=0),slideIndex<0&&(slideIndex=e.length-1),e.forEach(e=>{e.style.display="none"}),e[slideIndex].style.display="block",i.forEach(e=>{e.classList.remove("active")}),i[slideIndex].classList.add("active")}showSlides();let timer=7;const _timer=timer;setInterval(()=>{--timer<1&&(nextSlide(),timer=_timer)},1e3);
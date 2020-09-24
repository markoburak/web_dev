const slide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

console.log('hi')
console.log(slide)
console.log(carouselImages)

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextBtn.addEventListener('click',()=>{
    if(counter>= carouselImages.length -1) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

prevBtn.addEventListener('click',()=>{
    if(counter<=0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

slide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone'){     
    slide.style.transition = "none";
    counter = carouselImages.length -2;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    if(carouselImages[counter].id === 'firstClone'){     
        slide.style.transition = "none";
        counter = 1;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

        }

})
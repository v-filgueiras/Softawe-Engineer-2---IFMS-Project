document.addEventListener('DOMContentLoaded', () => {

    
    const forwardButton = document.querySelector('#buttonForward');
    const backButton = document.querySelector('#buttonBackward');
    const allSlides = [...document.querySelectorAll('.slider__image')];
    const allHeadlines = [...document.querySelectorAll('.slide__headline')];

    let activeSlideIndex = null;
    let clickable = true;
    let active = null; 
    let newActive = null;

    let activeHeadlineIndex = null;
    let enabled = null; 
    let newActiveHeadline = null;
    
    
   

    function changeSlide(forward) {
        if(clickable) {
            clickable = false;
            active = document.querySelector('.active');
            activeSlideIndex = allSlides.indexOf(active);

            enabled = document.querySelector('.enabled');
            activeHeadlineIndex = allHeadlines.indexOf(enabled);

            if(forward){
                newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
                active.classList.add('slideOutLeft'); 
                newActive.classList.add('slideInRight', 'active'); 

                newActiveHeadline = allHeadlines[(activeHeadlineIndex + 1) % allHeadlines.length];
                enabled.classList.add('slideOutBottom');
                newActiveHeadline.classList.add('slideInTop', 'enabled');


            } else {
                newActive = allSlides[(activeSlideIndex - 1 + allSlides.length) % allSlides.length];
                active.classList.add('slideOutRight'); 
                newActive.classList.add('slideInLeft', 'active'); 

                newActiveHeadline = allHeadlines[(activeHeadlineIndex - 1 + allHeadlines.length) % allHeadlines.length];
                enabled.classList.add('slideOutTop');
                newActiveHeadline.classList.add('slideInBottom', 'enabled');
            }
        }
    }

    allSlides.forEach(slide => {
        slide.addEventListener('transitionend', () => {
            if(slide === active && !clickable) {
                clickable = true;
                active.className = "slider__image slide" + activeSlideIndex; 
                enabled.className = "slide__headline";
            }
        })
    });
    
    forwardButton.addEventListener('click', () => {
        changeSlide(true);
    });
    backButton.addEventListener('click', () => {
        changeSlide(false);
    });
    
  
 });
let openBtn = document.querySelector('.openBtn');
let closeBtn = document.querySelector('.closeBtn');
let navMenu = document.querySelector('.menu')

openBtn.addEventListener('click', function(){
    openBtn.style.display = 'none';
    closeBtn.style.display = 'flex';
    navMenu.style.display = 'flex';
});

closeBtn.addEventListener('click', function(){
    closeBtn.style.display = 'none';
    openBtn.style.display = 'flex';
    navMenu.style.display = 'none';
})
function randomBetween(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var tl = new TimelineMax();

for(var i = 0; i < 5; i++){

  var t = TweenMax.to(document.querySelector('#blob' + i), randomBetween(14, 50), {
    y:260,
    repeat:-1,
    repeatDelay:randomBetween(1, 3),
    yoyo:true,
    ease:Linear.easeNone
  })

  tl.add(t, (i+1)/0.6)
}

tl.seek(120);

tl.timeScale(2);
(function() {
	const modifiers = {
		controlActive: 'slider__control--active',
	};

	const elRoot = document.querySelector('.js-slider');
	const elsItem = elRoot.querySelectorAll('.js-slider__item');
	const elItems = elRoot.querySelector('.js-slider__items');
	const elNext = elRoot.querySelector('.js-slider__next');
	const elPrevious = elRoot.querySelector('.js-slider__previous');

	//Max value is scrollWidth - clientWidth, since it's the right side of the block
	const maxScrollValue = elItems.scrollWidth - elRoot.clientWidth;
	//State values
	let currentSlide = 0;
	let currentX = 0;

	//Toggle controls visibility
	const updateControls = () => {
		//Hide previous button if we are at the start
		elPrevious.classList.toggle(modifiers.controlActive, currentX !== 0);
		//Hide next button if we are at the end
		elNext.classList.toggle(modifiers.controlActive, currentX < maxScrollValue);
	};

	//Slide to card by its index
	const slideTo = (index) => {
		//Check for minimal/maximal valid endexes
		if(index < 0 || index > elItems.length - 1) return;

		//Get total width of all items. CSS is built the way that items don't have any offsets between them.
		//Padding are used for that reason
		let scrollValue = 0;
		for(let i = 0; i < index; i++) {
			scrollValue += elsItem[i].clientWidth;
		}

		//Limit by maximal scroll value
		const targetValue = Math.min(scrollValue, maxScrollValue);

		//Scroll to card
		elItems.scrollTo({left: targetValue, behavior: 'smooth'});

		//Update state values and controls
		currentSlide = index;
		currentX = targetValue;
		updateControls();
	};

	//Update controls on page load, They start hidden not to have visible controls that can't be clicked while js still loads.
	updateControls();

	//Whenever you click controls you go to next or previous index
	elNext.addEventListener('click', () => slideTo(currentSlide + 1));
	elPrevious.addEventListener('click', () => slideTo(currentSlide - 1));

})();
const offset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

//updateDashoffset
const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength / height);
  
  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

//onScroll
window.addEventListener('scroll', () => {
  updateDashoffset();
   if (getTop() > offset) {
     scrollUp.classList.add('scroll-up--active');
   } else {
     scrollUp.classList.remove('scroll-up--active');
   }
});

//click
scrollUp.addEventListener('click', () => {
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
});
function smoothScroll() {
    let mainBtn = document.querySelector('.main__button');
    let portfolioSection = document.querySelector('.portfolio');

    mainBtn.addEventListener('click', function(e){
        e.preventDefault();
        portfolioSection.scrollIntoView({behavior: "smooth"});
    });

    let menuBtn = document.querySelector('.menu__button');
    let footerSection = document.querySelector('.footer');

    menuBtn.addEventListener('click', function(e){
        e.preventDefault();
        footerSection.scrollIntoView({behavior: "smooth"});
    });

    let aboutBtn = document.querySelector('.aboutBtn');
    let aboutSection = document.querySelector('.about');

    aboutBtn.addEventListener('click', function(e){
        e.preventDefault();
        aboutSection.scrollIntoView({behavior: "smooth"});
    });

    let servicesBtn = document.querySelector('.servicesBtn');
    let servicesSection = document.querySelector('.services');

    servicesBtn.addEventListener('click', function(e){
        e.preventDefault();
        servicesSection.scrollIntoView({behavior: "smooth"});
    });

    let portfolioBtn = document.querySelector('.portfolioBtn');

    portfolioBtn.addEventListener('click', function(e){
        e.preventDefault();
        portfolioSection.scrollIntoView({behavior: "smooth"});
    });
}

smoothScroll();
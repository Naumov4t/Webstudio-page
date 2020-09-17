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
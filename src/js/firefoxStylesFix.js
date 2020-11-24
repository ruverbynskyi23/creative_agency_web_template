(function() {
    const userAgent = navigator.userAgent;
    const mainTitle = document.querySelector('.section_title');

    if(userAgent.includes('Firefox')) {
        mainTitle.style.letterSpacing = '-0.02em';
    }
    
    return;
})()
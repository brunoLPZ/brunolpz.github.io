let currentIdx = 0;
let topPosition = 0;

function carousel() {
  const interval = setInterval(() => {
    const elements = document.getElementsByClassName('carousel-item');
    if (currentIdx === elements.length) {
      currentIdx = 0;
      
    }
    for (let element of elements) {
      const position = -currentIdx * 24;
      element.animate([
        // keyframes
        { top: topPosition },
        { top: `${position}rem` }
      ], {
        // timing options
        duration: 2000,
        fill: 'forwards'
      });
      topPosition = position;
    }
    currentIdx++;
  }, 5000);

}
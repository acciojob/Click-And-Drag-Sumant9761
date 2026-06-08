// Your code here.
const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', function(e) {
    isDown = true;
    slider.classList.add('active');

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', function() {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', function() {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', function(e) {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;

    slider.scrollLeft = scrollLeft - walk;
});
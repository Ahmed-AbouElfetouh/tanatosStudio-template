// Toggle Button
const toggleBtn = document.getElementById('toggle');
const linksList = document.getElementById('links');

toggleBtn.addEventListener('click', function () {
  linksList.classList.toggle('open');
  this.classList.toggle('toggle-arrow');
});

linksList.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener('click', (e) => {
  if (e.target !== linksList && e.target !== toggleBtn) {
    if (linksList.classList.contains('open')) {
      toggleBtn.classList.remove('toggle-arrow');
      linksList.classList.remove('open');
    }
  }
});

// Scroll To Every Section On Page
let allLinks = document.querySelectorAll('.links a');
allLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.scroll).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Scroll To About Section
const myIcon = document.getElementById('scroll-down');
myIcon.addEventListener('click', function (e) {
  e.stopPropagation();
  document.querySelector(e.target.dataset.scroll).scrollIntoView({
    behavior: 'smooth',
  });
});

// Show More And Show Less Button
const showMoreBtn = document.getElementById('show-more');
const picsContainer = document.querySelectorAll('.works .works-pics');

showMoreBtn.addEventListener('click', (e) => {
  if (showMoreBtn.textContent === 'Show More') {
    document.querySelectorAll(e.target.dataset.hide).forEach((element) => {
      element.style.display = 'block';
    });
    showMoreBtn.textContent = 'Show Less';
  } else {
    document.querySelectorAll(e.target.dataset.hide).forEach((element) => {
      element.style.display = 'none';
    });
    showMoreBtn.textContent = 'Show More';
  }
});

// Slider
const sliderContent = document.querySelectorAll('#test-content ul li');
const sliderLength = sliderContent.length;
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let start = 1;

function sliderHandler() {
  sliderContent.forEach((li) => {
    li.classList.remove('active');
  });
  sliderContent[start - 1].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  if (start === sliderLength) {
    start = 0;
  }
  start++;
  sliderHandler();
});

prevBtn.addEventListener('click', () => {
  if (start === 1) {
    start = sliderLength + 1;
  }
  start--;
  sliderHandler();
});

"use strict";

document.addEventListener('DOMContentLoaded', function() {
//menu
function navMenu () {
  const burger = document.querySelector('.toggle');
  const nav = document.querySelector('.navigation');
  const navLinks = document.querySelectorAll('.navigation__link');

nav.classList.remove('navigation--js');
 //animate links
 function animate(){
   navLinks.forEach((link,index) => {
    if(link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.3s ease forwards ${index / 5 + 0.3}s`;
    }
  });
 };
  //toggle nav
  burger.addEventListener('click', (evt) => {
    evt.preventDefault();
    nav.style.transition = '0.4s ease';
    nav.classList.toggle('navigation--active');
    animate();
    burger.classList.toggle('toggle--close');
  });

};

navMenu();

//slider
const slide = document.querySelector('.slider__items');
const images = document.getElementsByClassName('slider__item');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

function slideMove () {

let first = images[0];
let last = images[images.length - 1];
let cloneFirst = first.cloneNode(true);
let cloneLast = last.cloneNode(true);
cloneFirst.setAttribute('id', 'first');
cloneLast.setAttribute('id', 'last');
slide.insertBefore(cloneLast, first);
slide.appendChild(cloneFirst);

let counter = 1;
const size = images[0].clientWidth;
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', ()=>{
  if(counter >= images.length -1) return;
  slide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', ()=>{
  if (counter <= 0) return;
  slide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

slide.addEventListener('transitionend',()=>{
  if(images[counter].id === 'last') {
    slide.style.transition = 'none';
    counter = images.length - 2;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
   if(images[counter].id === 'first') {
    slide.style.transition = 'none';
    counter = images.length - counter;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})
};

slideMove();

//video
function findVideos() {
  let videos = document.querySelectorAll('.card__video-wrap');

  for(let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.card__video');
  let playBtn = video.querySelector('.card__play-btn');
  let videoLink = link.href;

  video.addEventListener('click', () => {
    let iframe = createIframe(videoLink);

    video.appendChild(iframe);
  });
  link.removeAttribute('href');
}

function createIframe(link) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', link);
  iframe.classList.add('video__media');

  return iframe;
}

findVideos()

 });

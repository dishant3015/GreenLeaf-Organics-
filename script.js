
(function () {
      'use strict';

      const MIN_SIZE        = 200;   
      const SCROLL_FACTOR   = 0.4; 
      const THRESHOLD_RATIO = 0.95;  
      const box = document.getElementById('box');
      let size = MIN_SIZE;

      
      function getMaxSize() {
        return Math.max(window.innerWidth, window.innerHeight / 1.75 );
      }

      
      function getThreshold() {
        return Math.min(window.innerWidth, window.innerHeight) * THRESHOLD_RATIO;
      }

      function render() {

        let boxWidth = Math.min(size, window.innerWidth);
        let boxHeight = Math.min(size * 1.75, window.innerHeight);

        box.style.width  = boxWidth + 'px';
        box.style.height = boxHeight + 'px';

        if (size >= getThreshold()) {
          box.classList.add('opened');
        } else {
          box.classList.remove('opened');
        }

        if (boxWidth >= window.innerWidth && boxHeight >= window.innerHeight) {
          box.classList.add('fullscreen');
          document.body.classList.add('no-scroll');
        } else {
          box.classList.remove('fullscreen');
          document.body.classList.remove('no-scroll');
        }
      }

      function clampAndRender() {
        size = Math.max(MIN_SIZE, Math.min(size, getMaxSize()));
        render();
      }

      box.addEventListener('wheel', function (e) {

        if (size >= getMaxSize()) {
          if (e.deltaY > 0) {
            return;
          }
          if (e.deltaY < 0 && box.scrollTop > 0) {
            return;
          }
        };

        e.preventDefault();

        size += e.deltaY * SCROLL_FACTOR;
        clampAndRender();
      }, { passive: false });

      window.addEventListener('resize', clampAndRender);

      render();

      const productsLink = document.querySelector('a[href="#Products"]');
      const productsArticle = document.querySelector('.products');

      if (productsLink && productsArticle) {
          productsLink.addEventListener('click', function (e) {
              e.preventDefault(); // Stops the sudden jump

              document.getElementById('About').scrollIntoView({ behavior: 'smooth' });

              const max = getMaxSize();
              function animateOpen() {
                  if (size < max) {
                      size += 40; 
                      clampAndRender();
                      requestAnimationFrame(animateOpen);
                  } else {
                      setTimeout(() => {
                          productsArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 300);
                  }
              }

              // Wait a tiny bit for the page to align before starting the box animation
              setTimeout(animateOpen, 200); 
          });
      }

      const serviceLink = document.querySelector('a[href="#Service"]');
      const serviceArticle = document.querySelector('.service');

      if (serviceLink && serviceArticle) {
          serviceLink.addEventListener('click', function (e) {
              e.preventDefault(); 

              document.getElementById('About').scrollIntoView({ behavior: 'smooth' });

              const max = getMaxSize();
              function animateOpen() {
                  if (size < max) {
                      size += 40;
                      clampAndRender();
                      requestAnimationFrame(animateOpen);
                  } else {
                        
                      setTimeout(() => {
                          serviceArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 300); 
                  }
              }

              setTimeout(animateOpen, 200); 
          });
      }

      const testimonialLink = document.querySelector('a[href="#Testimonials"]');
      const testimonialArticle = document.querySelector('.testimonials');

      if (testimonialLink && testimonialArticle) {
          testimonialLink.addEventListener('click', function (e) {
              e.preventDefault(); 

              document.getElementById('About').scrollIntoView({ behavior: 'smooth' });

              const max = getMaxSize();
              function animateOpen() {
                  if (size < max) {
                      size += 40; 
                      clampAndRender();
                      requestAnimationFrame(animateOpen);
                  } else {
                      
                      setTimeout(() => {
                          testimonialArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 300); 
                  }
              }

              setTimeout(animateOpen, 200); 
          });

      }

      const contactLink = document.querySelector('a[href="#Contact"]');
      const contactArticle = document.querySelector('.contact');

      if (contactLink && contactArticle) {
          contactLink.addEventListener('click', function (e) {
              e.preventDefault(); 

              document.getElementById('About').scrollIntoView({ behavior: 'smooth' });

              const max = getMaxSize();
              function animateOpen() {
                  if (size < max) {
                      size += 40; 
                      clampAndRender();
                      requestAnimationFrame(animateOpen);
                  } else {
                      
                      setTimeout(() => {
                          contactArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 300); 
                  }
              }

              setTimeout(animateOpen, 200); 
          });
      }


    })();

function toggleMenu(event, boxID) {
  event.preventDefault();

  const box = document.getElementById(boxID);

  if (box) {
    box.classList.toggle("open");

    if (box.classList.contains("open")) {
      setTimeout(() => {
        box.scrollIntoView({behavior: "smooth", block: "end"});
      }, 300);
    }
  }

}

function clearForm(event) {
  event.preventDefault();
  event.target.reset();
}

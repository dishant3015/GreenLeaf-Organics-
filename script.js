// JavaScript file is all AI

(function () {
      'use strict';

      // ── Config ──
      const MIN_SIZE        = 200;   // px — starting / minimum dimension
      const SCROLL_FACTOR   = 0.4;  // px added per wheel delta unit
      const THRESHOLD_RATIO = 0.8;  // fraction of viewport — "opened" state

      const box = document.getElementById('box');
      let size = MIN_SIZE;

      /** Max square size: full viewport (100vw × 100vh). */
      function getMaxSize() {
        return Math.max(window.innerWidth, window.innerHeight / 1.75 );
      }

      /** Size at which inner content fades in. */
      function getThreshold() {
        return Math.min(window.innerWidth, window.innerHeight) * THRESHOLD_RATIO;
      }

      /** Apply size to the box and toggle opened state. */
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

      /** Clamp size between min and max, then re-render. */
      function clampAndRender() {
        size = Math.max(MIN_SIZE, Math.min(size, getMaxSize()));
        render();
      }

      // ── 4. Wheel: resize box, prevent page scroll ──
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

        // deltaY > 0 → scroll down → grow; deltaY < 0 → scroll up → shrink
        size += e.deltaY * SCROLL_FACTOR;
        clampAndRender();
      }, { passive: false });

      // Re-clamp on resize so box stays within new viewport bounds
      window.addEventListener('resize', clampAndRender);

      // Initial paint
      render();

      // ── Smooth Scroll & Auto-Open for Products Link ──
      const productsLink = document.querySelector('a[href="#Products"]');
      const productsArticle = document.querySelector('.products');

      if (productsLink && productsArticle) {
          productsLink.addEventListener('click', function (e) {
              e.preventDefault(); // Stops the sudden jump

              // 1. Gently scroll the main page to the About section first
              document.getElementById('About').scrollIntoView({ behavior: 'smooth' });

              // 2. Function to smoothly grow the black box
              const max = getMaxSize();
              function animateOpen() {
                  if (size < max) {
                      size += 40; // Adjust this number to change expansion speed
                      clampAndRender();
                      requestAnimationFrame(animateOpen);
                  } else {
                      // 3. Once fully open, glide down to the Products lists
                      setTimeout(() => {
                          productsArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 300); // Brief pause to let the box finish opening
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
              e.preventDefault(); // Stops the sudden jump

              // 1. Gently scroll the main page to the About section first
              document.getElementById('About').scrollIntoView({ behavior: 'smooth' });

              // 2. Function to smoothly grow the black box
              const max = getMaxSize();
              function animateOpen() {
                  if (size < max) {
                      size += 40; // Adjust this number to change expansion speed
                      clampAndRender();
                      requestAnimationFrame(animateOpen);
                  } else {
                      // 3. Once fully open, glide down to the Products lists
                      setTimeout(() => {
                          serviceArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 300); // Brief pause to let the box finish opening
                  }
              }

              // Wait a tiny bit for the page to align before starting the box animation
              setTimeout(animateOpen, 200); 
          });
      }

      const testimonialLink = document.querySelector('a[href="#Testimonials"]');
      const testimonialArticle = document.querySelector('.testimonials');

      if (testimonialLink && testimonialArticle) {
          testimonialLink.addEventListener('click', function (e) {
              e.preventDefault(); // Stops the sudden jump

              // 1. Gently scroll the main page to the About section first
              document.getElementById('About').scrollIntoView({ behavior: 'smooth' });

              // 2. Function to smoothly grow the black box
              const max = getMaxSize();
              function animateOpen() {
                  if (size < max) {
                      size += 40; // Adjust this number to change expansion speed
                      clampAndRender();
                      requestAnimationFrame(animateOpen);
                  } else {
                      // 3. Once fully open, glide down to the Products lists
                      setTimeout(() => {
                          testimonialArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 300); // Brief pause to let the box finish opening
                  }
              }

              // Wait a tiny bit for the page to align before starting the box animation
              setTimeout(animateOpen, 200); 
          });

      }

      const contactLink = document.querySelector('a[href="#Contact"]');
      const contactArticle = document.querySelector('.contact');

      if (contactLink && contactArticle) {
          contactLink.addEventListener('click', function (e) {
              e.preventDefault(); // Stops the sudden jump

              // 1. Gently scroll the main page to the About section first
              document.getElementById('About').scrollIntoView({ behavior: 'smooth' });

              // 2. Function to smoothly grow the black box
              const max = getMaxSize();
              function animateOpen() {
                  if (size < max) {
                      size += 40; // Adjust this number to change expansion speed
                      clampAndRender();
                      requestAnimationFrame(animateOpen);
                  } else {
                      // 3. Once fully open, glide down to the Products lists
                      setTimeout(() => {
                          contactArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 300); // Brief pause to let the box finish opening
                  }
              }

              // Wait a tiny bit for the page to align before starting the box animation
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
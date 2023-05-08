document.addEventListener('DOMContentLoaded', function() {
    var burgerItems = document.querySelector('.burguer__items');
    var toggleButton = document.querySelector('.toggle-button');
    
    toggleButton.addEventListener('click', function() {
        if (burgerItems.style.display === 'none') {
            burgerItems.style.display = 'block';
          } else {
            burgerItems.style.display = 'none';
          }
        });
  });

window.sr = ScrollReveal();
    sr.reveal(`.about__content`, {
        duration: 3000,
        origin: `top`,
        distance:  `-50px`

    });   
    sr.reveal(`.about__picture`, {
         duration: 3000,
         origin: `bottom`,
         distance:  `-50px`
    });
    sr.reveal(`.contact-container`, {
        duration: 5000,
    });   

     sr.reveal(`.form-container`, {
         duration: 3000,
         origin: `right`,
         distance:  `-500px`

     });
    sr.reveal(`.form-container h3`, {
        duration: 3000,
        origin: `bottom`,
        distance:  `-100px`

    });
   
    

    sr.reveal(`.map`, {
        duration: 3000,
        origin: `left`,
        distance:  `-500px`

    });



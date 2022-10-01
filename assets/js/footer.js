var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    breakpoints: {
        
        0: {
          freemode:true,
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          freemode:true,
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          freemode:true,
          slidesPerView: 4,
          spaceBetween: 30,
        },
  }
  });

   // Set the date we're counting down to
   var countDownDate = new Date("Oct 15, 2022 20:00:00").getTime();
    
   // Update the count down every 1 second
   var x = setInterval(function() {
   
     // Get today's date and time
     var now = new Date().getTime();
   
     // Find the distance between now and the count down date
     var distance = countDownDate - now;
   
     // Time calculations for days, hours, minutes and seconds
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
     // Display the result in the element with id="demo"
     document.getElementById("day").innerHTML = days + "<br>Days";
     document.getElementById("hour").innerHTML = hours + "<br>Hours";
     document.getElementById("minutes").innerHTML = minutes + "<br>Minutes";
     document.getElementById("seconds").innerHTML = seconds + "<br>Seconds";
   
     // If the count down is finished, write some text
     if (distance < 0) {
       clearInterval(x);
       document.getElementById("demo").innerHTML = "TAMAMLANDI";
     }
   }, 1000);
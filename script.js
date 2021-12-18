var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    autoPlay: {
        delay: 2500,
        disableOnInteraction: false
    }
  });



  const audio = new Audio();
  audio.src="./utils/sarki.mp3";

  const btn = document.getElementById("btn");

  btn.addEventListener("click", (e) => {
      console.log("Furkan");
      audio.play();
  })
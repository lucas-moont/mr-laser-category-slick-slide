$(document).ready(function () {
  $(".category-slide-inner").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: `
      <button class='slide-btn prev-btn'>
        <img src='https://mrlaser.com.br/wp-content/uploads/2024/11/Vector-7.png'>
      </button>  
    `,
    nextArrow:`
      <button class='slide-btn next-btn'>
        <img src='https://mrlaser.com.br/wp-content/uploads/2024/11/Vector-5.svg'>
      </button>
    `,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 400,
        },
      },
    ],
  });
});

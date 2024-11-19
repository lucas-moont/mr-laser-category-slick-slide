$(document).ready(function () {
  $(".category-slide-inner").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: `
      <button class='slideBtn prevBtn'>
        <img src='https://mrlaser.com.br/wp-content/uploads/2024/11/Vector-7.png'>
      </button>  
    `,
    nextArrow:'',
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

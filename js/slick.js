$('.team-carousel').slick({

    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    mobileFirst: true,

    responsive: [
      {
          breakpoint: 465,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 992,
          settings: { slidesToShow: 3 }
        }
      ]
    }
  );
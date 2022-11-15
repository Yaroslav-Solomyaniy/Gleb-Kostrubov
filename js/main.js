$(function () {
  let headerMenu = $("#header__menu");
  let header = $("#header");
  let navLink = $(".nav_link");
  let headerHeight = header.innerHeight();
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function () {
    let headerHeight = header.innerHeight();
    scrollPos = $(this).scrollTop();
    if (scrollPos > headerHeight) {
      headerMenu.addClass("fixed");
      navLink.addClass("fixed_header_nav_color");
    } else {
      headerMenu.removeClass("fixed");
      navLink.removeClass("fixed_header_nav_color");
    }
  });
});

//smov-scroll
$("[data-scroll]").on("click", function (event) {
  event.preventDefault();

  let blockID = $(this).data("scroll");
  let BlockOffSet = $(blockID).offset().top;

  $("html, body").animate({ scrollTop: BlockOffSet+10},1500);
});

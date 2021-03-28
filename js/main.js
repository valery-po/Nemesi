
new WOW().init();

const menuToggle = document.querySelector('#menu-toggle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function () {
	menuToggle.classList.toggle('menu-icon-active');
	mobileNavContainer.classList.toggle('mobile-nav--active');
}

$(function(){


$(".mobile-nav__item").on("click", "a", function(event) {
        event.preventDefault();
        var id  = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 1500);
});
	
    $(".mobile-nav__item").on("click", function () {
		
		  $(".mobile-nav").removeClass("mobile-nav--active");
	   $(".mobile-nav__list").removeClass("mobile-nav__list--active");
				$("#menu-toggle").removeClass("menu-icon-active");
	
	});
});


 $("#carousel-gallery").owlCarousel({
  items: 1,
		nav: true,
		navText: [],
		loop: true,
		autoplay: true,
  dots: true,
});

var $btnTop = $(".btn-top")
$(window).on("scroll", function(){
	
if($(window).scrollTop() >= 20){
	
	
	
	$btnTop.fadeIn();
}else {
	
	$btnTop.fadeOut();
}	
	
});

$btnTop.on("click", function(){
	
	$("html,body").animate({scrollTop:0}, 1500)
	
	
});

const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data");
const headerLogo = document.querySelector(".header__logo");

searchBtn.onclick = () => {
  
  searchBox.classList.add("active");
  searchInput.classList.add("active");
  searchBtn.classList.add("active");
  cancelBtn.classList.add("active");
  headerLogo.classList.add("active");
  
  if(searchInput.value != ""){
    let values = searchInput.value;
    searchData.classList.remove("active");
    searchData.innerHTML = "Вы набрали: " + "<span style='font-weight: 500;'>" + values + "</span>";
  }else {
    searchData.innerHTML = "";
  }
};

cancelBtn.onclick = () => {
  
  searchBox.classList.remove("active");
  searchInput.classList.remove("active");
  searchBtn.classList.remove("active");
  cancelBtn.classList.remove("active");
  headerLogo.classList.remove("active");
  searchData.classList.add("active");
  searchInput.value = "";
};










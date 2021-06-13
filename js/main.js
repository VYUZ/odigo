//Header active
(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 120) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };
})();
//Burger handler
(function(){
    const burgerItem = document.querySelector('.burger');
    burgerItem.addEventListener('click')
}());

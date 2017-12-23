$(function() {
  var menuButton = $("#menu"),
      navbar = $("nav"),
      mainContent = $(".main-content"),
      overlay = $("#overlay"),
      state = "hidden";

  menuButton.on("click", function() {
    if (state === "hidden") {
      navbar.addClass("menu-open");
      mainContent.addClass("main-content-open");
      overlay[0].style.visibility = "visible";
      overlay[0].style.opacity = "1";
      state = "open";
    }
  });

  overlay.on("click", function() {
    var $this = this;

    if ($this.style.visibility === "visible") {
      navbar.removeClass("menu-open");
      mainContent.removeClass("main-content-open");
      $this.style.visibility = "hidden";
      $this.style.opacity = "0";
      state = "hidden";
    }
  });
})

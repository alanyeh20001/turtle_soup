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
      overlay.addClass("overlay-open");
      state = "open";
    }
  });

  overlay.on("click", function() {
    if (state === "open") {
      var $this = this;
      navbar.removeClass("menu-open");
      mainContent.removeClass("main-content-open");
      $($this).removeClass("overlay-open");
      state = "hidden";
    }
  });
})

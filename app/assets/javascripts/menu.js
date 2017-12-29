$(function() {
  var menuButton = $("#menu"),
      navbar = $("nav"),
      mainContent = $(".main-content"),
      overlay = $("#overlay"),
      background = $("#welcome .background"),
      state = "hidden";

  menuButton.on("click", function() {
    if (state === "hidden") {
      navbar.addClass("menu-open");
      mainContent.addClass("main-content-open");
      background.addClass("background-open");
      overlay.addClass("overlay-open");
      state = "open";
    }
  });

  overlay.on("click", function() {
    if (state === "open") {
      var $this = this;
      navbar.removeClass("menu-open");
      mainContent.removeClass("main-content-open");
      background.removeClass("background-open");
      $($this).removeClass("overlay-open");
      state = "hidden";
    }
  });
})

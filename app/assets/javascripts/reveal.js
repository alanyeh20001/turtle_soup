$(function () {
  window.descRevealState = "hidden";
  window.clueRevealState = "hidden";
  window.newClueRevealState = "hidden";

  var descPanel = $(".description-panel"),
      cluePanel = $(".clue-panel"),
      newCluePanel = $(".new-clue-panel"),
      infoLink = $(".info-link > .info");

  infoLink.on("click", function() {
    var linkId = $(this).attr("id");

    if (linkId === "description-link") {
      if (descRevealState === "open") {
        descPanel.fadeOut(500);
        descRevealState = "hidden";
      } else {
        cluePanel.fadeOut();
        newCluePanel.fadeOut();
        descPanel.fadeIn(500);
        clueRevealState = "hidden";
        newClueRevealState = "hidden";
        descRevealState = "open";
      }
    } else if (linkId === "clue-link") {
      if (clueRevealState === "open") {
        cluePanel.fadeOut(500);
        clueRevealState = "hidden";
      } else {
        descPanel.fadeOut();
        newCluePanel.fadeOut();
        cluePanel.fadeIn(500);
        descRevealState = "hidden";
        newClueRevealState = "hidden";
        clueRevealState = "open";
      }
    } else if (linkId === "new-clue-link") {
      if (newClueRevealState === "open") {
        newCluePanel.fadeOut(500);
        newClueRevealState = "hidden";
      } else {
        cluePanel.fadeOut();
        descPanel.fadeOut();
        newCluePanel.fadeIn(500);
        clueRevealState = "hidden";
        descRevealState = "hidden";
        newClueRevealState = "open";
      }
    }
  });
});


$(function () {
  window.descRevealState = "hidden";
  window.clueRevealState = "hidden";
  window.newClueRevealState = "hidden",
  window.changeStateRevealState = "hidden";

  var descPanel = $(".description-panel"),
      cluePanel = $(".clue-panel"),
      newCluePanel = $(".new-clue-panel"),
      changeStatePanel = $(".change-state-panel"),
      infoLink = $(".info-link .info");

  infoLink.on("click", function() {
    var linkId = $(this).attr("id");

    if (linkId === "description-link") {
      if (descRevealState === "open") {
        descPanel.fadeOut(500);
        descRevealState = "hidden";
      } else {
        cluePanel.fadeOut();
        newCluePanel.fadeOut();
        changeStatePanel.fadeOut();
        descPanel.fadeIn(500);
        clueRevealState = "hidden";
        newClueRevealState = "hidden";
        changeStateRevealState = "hidden";
        descRevealState = "open";
      }
    } else if (linkId === "clue-link") {
      if (clueRevealState === "open") {
        cluePanel.fadeOut(500);
        clueRevealState = "hidden";
      } else {
        descPanel.fadeOut();
        newCluePanel.fadeOut();
        changeStatePanel.fadeOut();
        cluePanel.fadeIn(500);
        descRevealState = "hidden";
        newClueRevealState = "hidden";
        changeStateRevealState = "hidden";
        clueRevealState = "open";
      }
    } else if (linkId === "new-clue-link") {
      if (newClueRevealState === "open") {
        newCluePanel.fadeOut(500);
        newClueRevealState = "hidden";
      } else {
        cluePanel.fadeOut();
        descPanel.fadeOut();
        changeStatePanel.fadeOut();
        newCluePanel.fadeIn(500);
        clueRevealState = "hidden";
        descRevealState = "hidden";
        changeStateRevealState = "hidden";
        newClueRevealState = "open";
      }
    } else if (linkId === "change-state-link") {
      if (changeStateRevealState === "open") {
        changeStatePanel.fadeOut(500);
        changeStateRevealState = "hidden";
      } else {
        cluePanel.fadeOut();
        descPanel.fadeOut();
        newCluePanel.fadeOut();
        changeStatePanel.fadeIn(500);
        clueRevealState = "hidden";
        descRevealState = "hidden";
        newClueRevealState = "hidden";
        changeStateRevealState = "open";
      }
    }
  });
});


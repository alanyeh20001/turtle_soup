$(function () {
  window.descRevealState = "hidden";
  window.clueRevealState = "hidden";
  window.newClueRevealState = "hidden",
  window.changeStateRevealState = "hidden";
  window.resultRevealState = "hidden";

  var descPanel = $(".description-panel"),
      cluePanel = $(".clue-panel"),
      newCluePanel = $(".new-clue-panel"),
      changeStatePanel = $(".change-state-panel"),
      resultPanel = $(".result-panel"),
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
        resultPanel.fadeOut();
        descPanel.fadeIn(500);
        clueRevealState = "hidden";
        newClueRevealState = "hidden";
        changeStateRevealState = "hidden";
        resultRevealState = "hidden";
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
        resultPanel.fadeOut();
        cluePanel.fadeIn(500);
        descRevealState = "hidden";
        newClueRevealState = "hidden";
        changeStateRevealState = "hidden";
        resultRevealState = "hidden";
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
        resultPanel.fadeOut();
        newCluePanel.fadeIn(500);
        clueRevealState = "hidden";
        descRevealState = "hidden";
        changeStateRevealState = "hidden";
        resultRevealState = "hidden";
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
        resultPanel.fadeOut();
        changeStatePanel.fadeIn(500);
        clueRevealState = "hidden";
        descRevealState = "hidden";
        newClueRevealState = "hidden";
        resultRevealState = "hidden";
        changeStateRevealState = "open";
      }
    } else if (linkId === "result-link") {
      if (resultRevealState === "open") {
        resultPanel.fadeOut(500);
        resultRevealState = "hidden";
      } else {
        cluePanel.fadeOut();
        descPanel.fadeOut();
        newCluePanel.fadeOut();
        changeStatePanel.fadeOut();
        resultPanel.fadeIn(500);
        clueRevealState = "hidden";
        descRevealState = "hidden";
        newClueRevealState = "hidden";
        changeStateRevealState = "hidden";
        resultRevealState = "open";
      }
    }
  });
});


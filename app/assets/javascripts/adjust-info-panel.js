$(function() {
  var changeStateLink = $("#change-state-link"),
      newClueLink = $("#new-clue-link"),
      resultLink = $("#result-link"),
      descPanel = $(".description-panel"),
      cluePanel = $(".clue-panel");

  if (resultLink.length > 0) {
    descPanel.addClass("desc-end");
    cluePanel.addClass("clue-end");
  } else if (!(changeStateLink.length > 0) && !(newClueLink.length > 0)) {
    descPanel.addClass("desc-change");
    cluePanel.addClass("clue-change");
  }
});


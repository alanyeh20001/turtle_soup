$(function() {
  var changeStateLink = $("#change-state-link"),
      newClueLink = $("#new-clue-link"),
      descPanel = $(".description-panel"),
      cluePanel = $(".clue-panel");

  if (!(changeStateLink.length > 0) && !(newClueLink.length > 0)) {
    descPanel.addClass("desc-change");
    cluePanel.addClass("clue-change");
  }
});


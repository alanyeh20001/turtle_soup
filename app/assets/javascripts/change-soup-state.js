$(function() {
   var changeStateForm = $(".change-state-panel .edit_soup");

  $(document).on("submit", changeStateForm, function(e) {
    var $this = $(this);
    e.preventDefault();

    var res = confirm("已經寫好解答了嗎？\n結束後就無法再對該鍋湯進行任何修改囉！");

    if (res == true) {
      var id = $("#messages").data("soup-id"),
          textarea = $this.find("#soup_result"),
          result = textarea.val();

      $.ajax({
        // call soups#update
        url: "/soups/" + id,
        type: "PUT",
        dataType: "json",
        data: {
          soup: {
            result: result,
            state: "finished"
          }
        },
        success: function(response) {
          removeLinkAndPanel();
          console.log("success");
        },
        error: function(response) {
          console.log("error")
        }
      });
    } else {
      // do nothing
    }
  });

  function removeLinkAndPanel() {
    // $(".info-link #change-state-link").remove();
    // $(".info-link #new-clue-link").remove();
    $(".change-state-panel").remove();
    $(".new-clue-panel").remove();
  }
})

$(function() {
  $("#change-state-link").on("click", function(e) {
    e.preventDefault();

    var res = confirm("確定要結束這鍋湯了嗎？\n已經將解答新增至線索裡了嗎？\n結束後就無法再對該鍋湯進行任何修改囉！");

    if (res == true) {
      var id = $("#messages").data("soup-id");

      $.ajax({
        // call soups#update
        url: "/soups/" + id,
        type: "PUT",
        dataType: "json",
        data: {
          soup: { state: "finished" }
        },
        success: function(response) {
          console.log("success")
        },
        error: function(response) {
          console.log("error")
        }
      });
    } else {
      // do nothing
    }
  });
})

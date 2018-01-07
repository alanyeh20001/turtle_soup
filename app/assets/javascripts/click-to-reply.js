$(function() {
  var messages = $("#messages");

  if (messages.length > 0) {
    var regex = new RegExp("(.*?)："),
        input = $("#new_message").find("textarea"),
        name;

    messages.find(".soup-participant").on("click", function(e) {
      name = this.innerText.match(regex)[1];
      $(input).val("回覆 " + name + " 》");
    });
  }
});

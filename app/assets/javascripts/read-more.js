$(function() {
  var desc = $(".description"),
      readMore = '<a class="read-more">看更多</a>';

  $(desc).each(function(index, value) {
    if (value.scrollHeight > value.clientHeight) {
      value.parentElement.innerHTML += readMore;
    }
  });

  $(".read-more").on("click", function() {
    var $this = this,
        desc  = $($this.parentElement).find(".description")[0];

    desc.style.webkitLineClamp = "50";
    desc.style.maxHeight = "max-content";
    $this.style.display = "none";
  });
});

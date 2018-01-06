$(function() {
  var onlineCounts = $(".online-counts");

  if (onlineCounts.length > 0) {
    var soup_ids = [];

    $.each(onlineCounts, function(index, onlineCount) {
      soup_ids.push($(onlineCount).data("soup-id"));
    });

    setInterval(function() { getCurrentOnlineCounts(soup_ids); }, 5000);
  }

  function getCurrentOnlineCounts(soup_ids) {
    $.ajax({
      // call soups#online_counts
      url: "/soups/online_counts",
      type: "GET",
      dataType: "json",
      data: {
        soup_ids: soup_ids
      },
      success: function(response) {
        console.log("success");
        updateCounter(response);

      },
      error: function(response) {
        console.log("error")
      }
    });
  }

  function updateCounter(response) {
    var res = response;

    $.each(onlineCounts, function(index, onlineCount) {
      Object.keys(res).map(function(key, i) {
        if (parseInt(key) === $(onlineCount).data("soup-id")) {
          $(onlineCount).find("span")[0].innerText = res[key];
          delete res[key];
        }
      });
    });
  }
});

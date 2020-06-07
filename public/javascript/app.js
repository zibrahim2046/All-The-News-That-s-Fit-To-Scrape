function shownote(event) {
  event.preventDefault();
  var id = $(this).attr("value");
  $("#addnote").fadeIn(300).css("display", "flex");
  $("add-note").attr("value", id);
  $.get("/" + id, function (data) {
    $("#arrticle-title").text(data.title);
    $.get("/note/" + id, function (data) {
      if (data) {
        $("#note-title").val(data.title);
        $("#note-body").val(data.body);
      }
    });
  });
}

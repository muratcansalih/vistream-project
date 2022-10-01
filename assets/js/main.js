$(".speaker-2").hide();
$("#speaker-btn-1").click(function () {
    $(".speaker-btn").removeClass("active");
    $("#speaker-btn-1").addClass("active");
    $(".speaker-1").show();
    $(".speaker-2").hide();
});
$("#speaker-btn-2").click(function () {
    $(".speaker-btn").removeClass("active");
    $("#speaker-btn-2").addClass("active");
    $(".speaker-2").show();
    $(".speaker-1").hide();
});
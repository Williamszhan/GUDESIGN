$(function () {
    $("#close").hide();
    $("nav").hide();
    $("#menu").click(function () {
        $("#menu").hide();
        $("#close").show();
        $("nav").show();
    });
    $("#close").click(function () {
        $("#close").hide();
        $("nav").hide();
        $("#menu").show();
    });
    $("#en").hide();
    $("#ch").click(function () {
        $("#ch").hide();
        $("#en").show();
    });
    $("#en").click(function () {
        $("#en").hide();
        $("#ch").show();
    });
})

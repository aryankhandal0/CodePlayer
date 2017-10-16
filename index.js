/**
 * Created by ak on 16/10/17.
 */
function updateOutput() {

    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());



}
$(".btn").click(function(){
    $(this).toggleClass("active");
    var panelId = $(this).attr("id") + "Panel";
    $("#" + panelId).toggleClass("hidden");
    var numberOfActivePanels = 4 - $('.hidden').length;
    $(".panel").width(($(window).width() / numberOfActivePanels) - 10);

});
$(".panel").height($(window).height() - $("#header").height() - 18);

$(".panel").width(($(window).width() / 2) - 10);

updateOutput();

$("textarea").on('change keyup paste', function() {

    updateOutput();


});

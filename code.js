$(".cont").css("display", "none");
$(".btn").prop("disabled", true);
$(document).ready(function() {
    $("#check").click(function(event) {
        if ($("#check").is(':checked')) {
            $(".btn").prop("disabled", false);
            $(".btn").click(function(event) {

                var text = $(".t1").val();
                var text2 = $(".t2").val();
                $(".name").text(text + ' ' + text2);
                var mail = $(".t3").val();
                $(".mail").text(mail);
                $(".selected").text($("select option:selected").text());
                if ($("#radio1").is(':checked')) {
                    $("#ph").addClass("z");
                    $("#ph").removeClass("w");
                } else {
                    $("#ph").addClass("w");
                    $("#ph").removeClass("z");
                }
                $(".container").css("display", "none");
                $(".cont").css("display", "block");

                $(".btn").prop("disabled", true);

            });
        }
    });

    $(".bbbtn").click(function(event) {
        $(".t1").val("");
        $(".t2").val("");
        $(".t3").val("");
        $(".selected").text();
        $("#radio1").prop("checked", false);
        $("#radio2").prop("checked", false);
        $("#check").prop('checked', false);
        $(".container").css("display", "block");
        $(".cont").css("display", " none");
        $("select [value='0']").prop('selected', true);

    });
});
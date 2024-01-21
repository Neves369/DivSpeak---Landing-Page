$(document).ready(function() {

    $("#load_me_baby").on("click", function(e) {
        e.preventDefault();

        var testUrl = "https://reqres.in/api/users?delay=3";
        $.get(
            testUrl,
            function(response) {
                if (response.data[0]) {
                    //if you received a successful return, remove the modal. Either way remove the modal!!
                    var resOutput =
                        '<h4 style="color: white">Modal closed and output displayed!</h4><p style="color: white">This is <b>' +
                        response.data[0].first_name +
                        " " +
                        response.data[0].last_name +
                        '</b></p><img src="' +
                        response.data[0].avatar +
                        '" class="img-responsive img-thumbnail" alt="avatar" style="margin-top: 13px; max-width="200px;">';
                    $("#output").html(resOutput);

                } else {
                    $("#output").html(
                        '<div class="alert alert-warning"><h4>Uh oh!</h4></div>'
                    );
                }
            },
            "json"
        );
    });
});
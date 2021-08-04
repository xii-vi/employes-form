$(function () {

    var countryOptions;
    var stateOptions;

    $.getJSON('countries.json', function (result) {

        $.each(result, function (i, country) {

            //<option value='countrycode' >contryname</option>

            countryOptions += "<option value='"

                +country.code + " > "

                +country.name +

                "</option>";

        });

        $('#country').html(countryOptions);


    });



    $("#country").change(function () {

        $.getJSON('indianState.json', function (result) {

            $.each(result, function (stateCode, stateName) {

                //<option value='countrycode' >contryname</option>

                stateOptions += "<option value='"
                    +state.code + "' > "

                    +state.name +

                    "</option>";

            });

            $('#state').html(stateOptions);


        });



    });

});
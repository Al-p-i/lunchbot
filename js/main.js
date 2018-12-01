(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        })
    });


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;
        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).val().trim() == '') {
            return false;
        }
        if($(input).val().trim().match(/^\+([0-9]+)-([0-9]+)/) == null) {
            return false;
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    /*==================================================================
    [ Send phone ]*/
    $(document).ready(function () {
        $("#join").click(function () {
            var form = $("#login-form");
            $.ajax({
                method: "POST",
                url: "join.do",
                data: form.serialize(),
                success: function (ajaxResult) {
                    $("#join").text("Thank you");
                    $("#join").disable
                    $("#join").addClass("")
                },
                error: function (request, status, responseText) {
                    alert("fail")
                }
            })
        });
    });


})(jQuery);
"use strict";
(function(){
	$(document).on('click', '#mainForm', function (e) {
        e.preventDefault();
        if (validateForm()) {
            //sendForm();
            $("#formCase").submit();
        };
    });
     

    function validateForm() {
        var error = 0;
        if ($('#name').val() == '') {
            error += 1;
            $('#name').addClass("error");
            setTimeout(function () {
                $('#name').removeClass("error");
            }, 9000);
        } else {
            $('#name').removeClass("error");
        }

        if ($('#email').val() == '') {
            error += 1;
            $('#email').addClass("error");
            setTimeout(function () {
                $('#email').removeClass("error");
            }, 9000);
        } else {
            $('#email').removeClass("error");
        }

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test($('#email').val())) {
            $('#email').addClass("error");
            error += 1;
            setTimeout(function () {
                $('#email').removeClass("error");
            }, 9000);
        } else {
            $('#email').removeClass("error");
        }

        if ($('#lastname').val() == '') {
            error += 1;
            $('#lastname').addClass("error");
            setTimeout(function () {
                $('#lastname').removeClass("error");
            }, 9000);
        } else {
            $('#lastname').removeClass("error");
        }

        if ($('#age').val() == 0) {
            error += 1;
            $('#age').addClass("error");
            setTimeout(function () {
                $('#age').removeClass("error");
            }, 9000);
        } else {
            $('#age').removeClass("error");
        }



        if ($('#message').val() == '') {
            error += 1;
            $('#message').addClass("error");
            setTimeout(function () {
                $('#message').removeClass("error");
            }, 9000);
        } else {
            $('#message').removeClass("error");
        }

        

        if (error != 0) {
            return false;
        } else {
            return true;
        }
    }
    
})();
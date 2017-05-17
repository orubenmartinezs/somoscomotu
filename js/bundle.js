(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);

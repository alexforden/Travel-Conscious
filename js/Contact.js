"use strict";
$(document).ready(() => {

    $("#TC_ContactSubmit").click(evt => {
        let isValid = true;

        const firstName = $("#first_name").val().trim();
        if (firstName === "") {
            $("#first_name").next("span.error").text("This field is required.");
            isValid = false;
        } else {
            $("#first_name").next("span.error").text("");
        }
        $("#first_name").val(firstName);

        const lastName = $("#last_name").val().trim();
        if (lastName === "") {
            $("#last_name").next("span.error").text("This field is required.");
            isValid = false;
        } else {
            $("#last_name").next("span.error").text("");
        }
        $("#last_name").val(lastName);

        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email === "") {
            $("#email").next("span.error").text("This field is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email").next("span.error").text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next("span.error").text("");
        }
        $("#email").val(email);

        if (!isValid) {
            evt.preventDefault();
        } else {
            evt.preventDefault();
            window.location.href = "TC_ContactSubmit.html";
        }
    });

    $("#reset").click(() => {
        $("#first_name, #last_name, #email, #comments").val("");
        $("span.error").text("*");
    });

    $("#first_name").focus();
});

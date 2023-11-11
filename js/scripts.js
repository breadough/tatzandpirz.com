/*!
* Start Bootstrap - Grayscale v7.0.0 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://x.x-x.us-east-2.amazonaws.com/Production/contactus";

    if(function_validate()){
        return;
    }

    var name = $("#inputName").val();
    var phone = $("#inputPhone").val();
    var date = $("#inputDate").val();
    var desc = $("#inputMessage").val();
    var data = {
       name : name,
       phone : phone,
       date : date,
       desc : desc
     };

     $.ajax({
        type: "POST",
        url : "https://x.x-x.us-east-2.amazonaws.com/Production/contactus",
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
  
        
        success: function () {
          // clear form and show a success message
          alert("Appointment Requested! We will get in touch soon. Thank you!");
          document.getElementById("contact-form").reset();
          location.reload();
        },
        error: function () {
          // show an error message
          alert("Error! Message was not sent. Please try again");
          location.reload();
        }});
}

// validation
function function_validate(){
    var Namere = /[A-Za-z]{0}[A-Za-z]/;
    if (!Namere.test($("#inputName").val())) {
                 alert ("Please provide a name");
        return true;
    } 
    var mobilere = /[0-9]{11,12}$/;
    if (!mobilere.test($("#inputPhone").val())) {
        alert ("Please check your mobile number");
        return true;
    }
    if ($("#inputDate").val()=="") {
            alert ("Please select a date");
        return true;
    }
}

//function to show navel aftercare
function showNavelAftercare(){
    document.getElementById("navalAftercare").style.display = "block";
    document.getElementById("navalAftercareButton").style.display = "none";
}
import $ from 'jquery';
$(function() {
  var api = "http://ficklebeans.com/mail/index.php";
    $("#subscribe input").jqBootstrapValidation({
      preventSubmit: true,
      submitError: function($form, event, errors) {
        // additional error messages or events
      },
      submitSuccess: function($form, event) {
        event.preventDefault(); // prevent default submit behaviour
        // get values from FORM

        var email = $("input#subscribeemail").val();

        var firstName = name; // For Success/Failure Message
        // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
          firstName = name.split(' ').slice(0, -1).join(' ');
        }
        $this = $("#subscribeButton");
        $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
        $.ajax({
          url: api,

        crossDomain: true,
        contentType:    'application/json',
          type: "GET",
          data: {

            email: email,
            type:0,

          },
          cache: false,
          success: function(response) {
            console.log(response);
            // Success message
            $('#success1').html("<div class='alert alert-success'>");
            $('#success1 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>");
            $('#success1 > .alert-success')
              .append("<strong>Your message has been sent. </strong>");
            $('#success1 > .alert-success')
              .append('</div>');
            //clear all fields
            $('#subscribe').trigger("reset");
          },
          error: function() {
            // Fail message
            $('#success1').html("<div class='alert alert-danger'>");
            $('#success1 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>");
            $('#success1 > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
            $('#success1 > .alert-danger').append('</div>');
            //clear all fields
            $('#subscribe').trigger("reset");
          },
          complete: function() {
            setTimeout(function() {
              $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
            }, 1000);
          }
        });
      },
      filter: function() {
        return $(this).is(":visible");
      },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
      e.preventDefault();
      $(this).tab("show");
    });
  });

  /*When clicking on Full hide fail/success boxes */
  $('#email').focus(function() {
    $('#success1').html('');
  });

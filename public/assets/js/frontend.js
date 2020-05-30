$(function() {
    $(".devourBtn").on("click", function(event) {
      let id = $(this).data("id");
      let devoured = true;
  
      let devouredState = {
        devoured: devoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".addBurger").on("submit", function(event) {
      event.preventDefault();
  
      let newBurger = {
        name: $("#burger").val().trim(),
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  });
  
$(document).ready(function() {
  let pageCounter = 1;
  let animalContainer = $("#animal-info");
  let btn = $("#btn");

  btn.on("click", function() {
      $.ajax({
          url: 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json',
          success: function(data) {
              renderHTML(data);
          },
          error: function() {
              console.log("Connection error");
          }
      });
      pageCounter++;
      if (pageCounter > 3) {
          btn.addClass("hide-me");
      }
  });

 
});